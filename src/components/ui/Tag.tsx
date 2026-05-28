import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "font-mono inline-flex items-center border px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase transition-colors",

        variant === "default" &&
          "border-border text-muted",

        variant === "accent" &&
          "border-(--fg-accent)/20 bg-(--fg-accent)/5 text-(--fg-accent)",

        className,
      )}
    >
      {children}
    </span>
  );
}