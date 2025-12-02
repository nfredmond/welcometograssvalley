import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  trailhead: z.string().optional().nullable(),
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  if (!resend) {
    console.warn("Resend not configured, skipping email notification");
    return;
  }

  try {
    await resend.emails.send({
      from: "Welcome to Grass Valley <onboarding@resend.dev>",
      to: ["nfredmond@gmail.com", "grassvalleypodcast@gmail.com"],
      subject: `Contact Form: ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This submission was received via welcometograssvalley.com
        </p>
      `,
    });
  } catch (error) {
    console.error("Failed to send notification email:", error);
  }
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parseResult = ContactSchema.safeParse(payload);

  if (!parseResult.success) {
    return NextResponse.json(
      { error: parseResult.error.flatten() },
      { status: 422 }
    );
  }

  const { trailhead, ...data } = parseResult.data;

  if (trailhead) {
    return NextResponse.json({ ok: true });
  }

  let supabase;
  try {
    supabase = createServiceSupabaseClient();
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }
  const { error } = await supabase.from("forms_contact").insert({
    name: data.name,
    email: data.email,
    message: data.message,
  });

  if (error) {
    console.error("Contact form insert failed", error.message);
    return NextResponse.json({ error: "Unable to save" }, { status: 500 });
  }

  // Send email notification (non-blocking)
  sendNotificationEmail(data);

  return NextResponse.json({ ok: true }, { status: 201 });
}

