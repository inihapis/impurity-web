import Link from "next/link";
import { cn } from "@/lib/utils";



interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export function SectionHeader({
  label,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        {label && (
          <p className="font-mono mb-2 text-xs tracking-[0.2em] text-muted uppercase">
            {label}
          </p>
        )}
        <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="touch-target font-mono inline-flex min-h-11 items-center text-xs tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}