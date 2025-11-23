import { ContactForm } from "@/components/forms/ContactForm";

export const revalidate = 300;

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a27955]">
          Contact
        </p>
        <h1 className="mt-2 text-4xl text-[#2d241d]">Say hello</h1>
        <p className="mt-4 text-sm text-[#5a4d44]">
          Whether you have news tips, recovery resources, or want to volunteer,
          we read every message.
        </p>
      </section>

      <ContactForm />
    </div>
  );
}

