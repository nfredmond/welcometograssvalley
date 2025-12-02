import { NextResponse } from "next/server";
import { z } from "zod";
import { createServiceSupabaseClient } from "@/lib/supabase/serviceClient";

const GuestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  nominee_details: z.string().min(1),
  trailhead: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  try {
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

    const supabase = createServiceSupabaseClient();
    
    const { error } = await supabase.from("forms_guest_submissions").insert({
      name: data.name,
      email: data.email,
      nominee_details: data.nominee_details,
    });

    if (error) {
      console.error("Guest submission insert failed", error.message);
      return NextResponse.json({ error: "Unable to save" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Unexpected error in guest submission route:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

