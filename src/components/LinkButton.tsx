import { ArrowRight } from "lucide-react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function LinkButton({
  href,
  children,
  variant = "dark",
  className = "",
}: LinkButtonProps) {
  const styles =
    variant === "dark"
      ? "border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold-light"
      : "border-brand-gold-dark/40 text-brand-gold-dark hover:border-brand-gold-dark hover:bg-brand-gold-dark/10";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium tracking-wide cursor-pointer transition-all duration-200 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
