import type React from "react";

export function accentStyle(
  bgAccent?: string,
  fgAccent?: string,
): React.CSSProperties {
  return {
    "--bg-accent": bgAccent ?? "var(--surface)",
    "--fg-accent": fgAccent ?? "var(--foreground)",
  } as React.CSSProperties;
}