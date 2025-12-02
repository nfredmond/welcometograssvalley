import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const GuestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  nominee_details: z.string().min(20),
  trailhead: z.string().optional().nullable(),
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  nominee_details: string;
}) {
  if (!resend) {
    console.warn("Resend not configured, skipping email notification");
    return;
  }

  try {
    await resend.emails.send({
      from: "Welcome to Grass Valley <onboarding@resend.dev>",
      to: ["nfredmond@gmail.com", "grassvalleypodcast@gmail.com"],
      subject: `New Guest Suggestion from ${data.name}`,
      html: `
        <h2>New Guest Suggestion</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <hr />
        <p><strong>Details:</strong></p>
        <p>${data.nominee_details.replace(/\n/g, "<br />")}</p>
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

  const parseResult = GuestSchema.safeParse(payload);
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
  const { error } = await supabase.from("forms_guest_submissions").insert({
    name: data.name,
    email: data.email,
    nominee_details: data.nominee_details,
  });

  if (error) {
    console.error("Guest submission insert failed", error.message);
    return NextResponse.json({ error: "Unable to save" }, { status: 500 });
  }

  // Send email notification (non-blocking)
  sendNotificationEmail(data);

  return NextResponse.json({ ok: true }, { status: 201 });
}

