const SUPPORT_URL = "https://www.buzzsprout.com/2559461/support";

type SupportButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

export function SupportButton({
  variant = "primary",
  className = "",
  children = "Support the Show",
}: SupportButtonProps) {
  const baseStyles =
    "rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] transition";

  const variantStyles =
    variant === "primary"
      ? "bg-[#1f4a3a] text-[#e5f4ec] hover:bg-[#184739]"
      : "border border-[#cfe3d3] text-[#1f4a3a] hover:bg-[#e3f3ec]";

  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </a>
  );
}
