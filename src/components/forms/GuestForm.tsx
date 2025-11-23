"use client";

import { FormEvent, useState } from "react";
import { HoneypotField } from "./HoneypotField";

export function GuestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      nominee_details: formData.get("nominee_details"),
      trailhead: formData.get("trailhead"),
    };
    if (payload.trailhead) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/guest-submission", {
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
        name="name"
        placeholder="Your name"
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
        name="nominee_details"
        placeholder="Who should we talk to? Share their story, role, and contact."
        className="min-h-[180px] rounded-2xl border border-[#d9c6b3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#a97952]"
        required
      />
      <HoneypotField />
      <button
        type="submit"
        className="rounded-full bg-[#2d2a26] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#f5e6d4] transition hover:bg-black"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send submission"}
      </button>
      {status === "success" && (
        <p className="text-sm text-[#2f6b3a]">
          Thank you—our producers will follow up if it’s a fit.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went sideways. Please try again.
        </p>
      )}
    </form>
  );
}

