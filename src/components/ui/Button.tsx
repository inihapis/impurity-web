import Link from "next/link";
import type {
  CSSProperties,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "accent-outline";
  external?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  style,
}: ButtonProps) {
  const classes = cn(
    "touch-target inline-flex min-h-11 items-center justify-center border px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",

    variant === "primary" &&
      "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground focus-visible:outline-foreground",

    variant === "outline" &&
      "border-border text-foreground hover:border-foreground focus-visible:outline-foreground",

    variant === "accent-outline" &&
      "border-border text-muted hover:border-(--fg-accent)/40 hover:bg-(--fg-accent)/5 hover:text-(--fg-accent) focus-visible:outline-(--fg-accent)",

    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      style={style}
    >
      {children}
    </Link>
  );
}