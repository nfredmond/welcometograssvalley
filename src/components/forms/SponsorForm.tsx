"use client";

import { FormEvent, useState } from "react";
import { HoneypotField } from "./HoneypotField";

export function SponsorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      organization: formData.get("organization"),
      contact_name: formData.get("contact_name"),
      email: formData.get("email"),
      message: formData.get("message"),
      trailhead: formData.get("trailhead"),
    };
    if (payload.trailhead) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/sponsor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        event.currentTarget.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel flex flex-col gap-4 p-6"
      aria-live="polite"
    >
      <input
        name="organization"
        placeholder="Organization"
        className="rounded-2xl border border-[#d9c6b3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#a97952]"
        required
      />
      <input
        name="contact_name"
        placeholder="Point of contact"
        className="rounded-2xl border border-[#d9c6b3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#a97952]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-2xl border border-[#d9c6b3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#a97952]"
        required
      />
      <textarea
        name="message"
        placeholder="Tell us about your mission and how you hope to partner."
        className="min-h-[150px] rounded-2xl border border-[#d9c6b3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#a97952]"
        required
      />
      <HoneypotField />
      <button
        type="submit"
        className="rounded-full bg-[#b88658] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#2d241d] transition hover:bg-[#d49b60]"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "success" && (
        <p className="text-sm text-[#2f6b3a]">
          Thanks! We’ll be in touch with partnership options within a week.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Could not save your message. Please retry shortly.
        </p>
      )}
    </form>
  );
}

