import { NextResponse } from "next/server";
import { z } from "zod";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  trailhead: z.string().optional().nullable(),
});

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

  return NextResponse.json({ ok: true }, { status: 201 });
}

