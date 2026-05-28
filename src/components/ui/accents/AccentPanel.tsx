import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AccentPanelProps extends HTMLAttributes<HTMLDivElement> {}

export function AccentPanel({
  className,
  ...props
}: AccentPanelProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-(--bg-accent) opacity-[0.03] transition-opacity group-hover:opacity-[0.06]",
        className,
      )}
      aria-hidden
      {...props}
    />
  );
}