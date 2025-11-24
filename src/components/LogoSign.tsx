import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoSignProps = {
  className?: string;
};

export function LogoSign({ className }: LogoSignProps) {
  return (
    <div className={cn("relative mx-auto flex justify-center", className)}>
      <div className="relative max-w-2xl">
        <Image
          src="/grass-valley-logo.png"
          alt="Welcome to Grass Valley Podcast"
          width={900}
          height={400}
          priority
          className="h-auto w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  );
}
