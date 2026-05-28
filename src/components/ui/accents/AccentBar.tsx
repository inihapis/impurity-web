import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AccentBarProps extends HTMLAttributes<HTMLDivElement> {}

export function AccentBar({
  className,
  ...props
}: AccentBarProps) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 h-0.5 w-full bg-(--fg-accent) transition-all group-hover:w-1/12",
        className,
      )}
      aria-hidden
      {...props}
    />
  );
}