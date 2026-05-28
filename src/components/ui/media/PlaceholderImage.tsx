import Image from "next/image";
import type { PlaceholderVariant } from "@/lib/images";

const VARIANT_STYLES: Record<
  PlaceholderVariant,
  { from: string; to: string; accent: string }
> = {
  release: { from: "#1a1a1a", to: "#0a0a0a", accent: "#6b6b6b" },
  journal: { from: "#141414", to: "#080808", accent: "#555555" },
  archive: { from: "#121212", to: "#060606", accent: "#4a4a4a" },
  campaign: { from: "#161616", to: "#090909", accent: "#707070" },
  press: { from: "#101010", to: "#050505", accent: "#888888" },
};

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  variant?: PlaceholderVariant;
  label?: string;
  sublabel?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-4/5",
  wide: "aspect-21/9",
};

function ImageOverlay({
  label,
  sublabel,
}: {
  label?: string;
  sublabel?: string;
}) {
  if (!label && !sublabel) return null;
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-4 md:p-6">
        {sublabel && (
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
            {sublabel}
          </p>
        )}
        {label && (
          <p className="font-display mt-1 text-lg text-foreground md:text-xl">
            {label}
          </p>
        )}
      </div>
    </>
  );
}

export function PlaceholderImage({
  src,
  alt,
  variant = "archive",
  label,
  sublabel,
  aspectRatio = "square",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PlaceholderImageProps) {
  const style = VARIANT_STYLES[variant];
  const wrapperClass = `relative overflow-hidden border border-border bg-surface ${aspectClasses[aspectRatio]} ${className}`;

  if (src) {
    return (
      <div className={wrapperClass}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={sizes}
          priority={priority}
        />
        <ImageOverlay label={label} sublabel={sublabel} />
      </div>
    );
  }

  return (
    <div className={wrapperClass} role="img" aria-label={alt}>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={style.from} />
            <stop offset="100%" stopColor={style.to} />
          </linearGradient>
          <radialGradient id={`glow-${variant}`} cx="30%" cy="20%" r="60%">
            <stop offset="0%" stopColor={style.accent} stopOpacity="0.25" />
            <stop offset="100%" stopColor={style.accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#grad-${variant})`} />
        <rect width="400" height="400" fill={`url(#glow-${variant})`} />
        <line
          x1="0"
          y1="400"
          x2="400"
          y2="0"
          stroke={style.accent}
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      </svg>
      <ImageOverlay label={label} sublabel={sublabel} />
    </div>
  );
}
