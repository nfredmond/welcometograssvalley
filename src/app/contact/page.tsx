import { ContactForm } from "@/components/forms/ContactForm";

export const revalidate = 300;

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Contact
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">Say hello</h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          Whether you have news tips, recovery resources, or want to volunteer,
          we read every message.
        </p>
      </section>

      <ContactForm />
    </div>
  );
}

