"use client";

import { FormEvent, useState } from "react";
import { HoneypotField } from "./HoneypotField";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      trailhead: formData.get("trailhead"),
    };
    if (payload.trailhead) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
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
        type="text"
        name="name"
        placeholder="Your name"
        className="rounded-2xl border border-[#cfe3d3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#4f9c78]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-2xl border border-[#cfe3d3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#4f9c78]"
        required
      />
      <textarea
        name="message"
        placeholder="How can we help lift up the community?"
        className="min-h-[140px] rounded-2xl border border-[#cfe3d3] bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#4f9c78]"
        required
      />
      <HoneypotField />
      <button
        type="submit"
        className="rounded-full bg-[#1f4a3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#e5f4ec] transition hover:bg-[#184739]"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-[#2f6b4e]">
          Thanks for reaching out—we’ll reply within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

