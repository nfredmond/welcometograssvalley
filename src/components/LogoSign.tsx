import { cn } from "@/lib/utils";

type LogoSignProps = {
  className?: string;
  tagline?: string | null;
};

export function LogoSign({ className, tagline }: LogoSignProps) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-md rounded-[2.5rem] border border-[#7a5a45] bg-gradient-to-b from-[#4d3426] via-[#3b2a20] to-[#2b1d16] p-6 text-center text-white shadow-[0_35px_55px_rgba(22,12,6,0.55)]",
        className
      )}
    >
      <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-[#cfa06d]" />
      <p className="text-sm uppercase tracking-[0.3em] text-[#e0c9b0]">
        Welcome to
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-wide text-[#f1e6d7]">
        Grass Valley
      </h1>
      <p className="mt-4 text-sm text-[#f1d9c1]">
        {tagline ?? "A podcast for the Sierra Nevada community lifeline."}
      </p>
      <div className="absolute -bottom-4 left-1/2 h-8 w-28 -translate-x-1/2 rounded-full bg-[#c08a58] blur-lg opacity-50" />
    </div>
  );
}

