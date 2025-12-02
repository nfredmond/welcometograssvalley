import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const SponsorSchema = z.object({
  organization: z.string().min(2),
  contact_name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(25),
  trailhead: z.string().optional().nullable(),
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendNotificationEmail(data: {
  organization: string;
  contact_name: string;
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
      subject: `Sponsor Inquiry: ${data.organization}`,
      html: `
        <h2>New Sponsor Inquiry</h2>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Contact:</strong> ${data.contact_name} (${data.email})</p>
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

  const parseResult = SponsorSchema.safeParse(payload);
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
  const { error } = await supabase.from("forms_sponsor_inquiries").insert({
    organization: data.organization,
    contact_name: data.contact_name,
    email: data.email,
    message: data.message,
  });

  if (error) {
    console.error("Sponsor inquiry insert failed", error.message);
    return NextResponse.json({ error: "Unable to save" }, { status: 500 });
  }

  // Send email notification (non-blocking)
  sendNotificationEmail(data);

  return NextResponse.json({ ok: true }, { status: 201 });
}

