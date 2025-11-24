import { cn } from "@/lib/utils";

type LogoSignProps = {
  className?: string;
  tagline?: string | null;
};

export function LogoSign({ className, tagline }: LogoSignProps) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-md rounded-[2.5rem] border border-[#337056] bg-gradient-to-b from-[#1d4739] via-[#12352b] to-[#0a211a] p-6 text-center text-white shadow-[0_35px_55px_rgba(10,33,26,0.55)]",
        className
      )}
    >
      <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-[#8cc8b0]" />
      <p className="text-sm uppercase tracking-[0.3em] text-[#d8efdf]">
        Welcome to
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-wide text-[#e9f4ec]">
        Grass Valley
      </h1>
      <p className="mt-4 text-sm text-[#d7efe1]">
        {tagline ?? "Foothill signals. River-town radio."}
      </p>
      <div className="absolute -bottom-4 left-1/2 h-8 w-28 -translate-x-1/2 rounded-full bg-[#4fa087] blur-lg opacity-60" />
    </div>
  );
}

