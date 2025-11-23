import { NextResponse } from "next/server";
import { z } from "zod";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const SponsorSchema = z.object({
  organization: z.string().min(2),
  contact_name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(25),
  trailhead: z.string().optional().nullable(),
});

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

  return NextResponse.json({ ok: true }, { status: 201 });
}

