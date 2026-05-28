import { PlaceholderImage } from "./PlaceholderImage";
import { resolveImagePath } from "@/lib/images";

interface ReleaseArtworkProps {
  slug: string;
  title: string;
  type: string;
  artwork?: string;
  coverImage?: string;
  bgAccent?: string;
  fgAccent?: string;
  priority?: boolean;
  className?: string;
  aspectRatio?: "square" | "portrait" | "wide";
}

export function ReleaseArtwork({
  slug,
  title,
  type,
  artwork,
  coverImage,
  bgAccent,
  priority,
  className,
  aspectRatio = "square",
}: ReleaseArtworkProps) {
  const src = resolveImagePath(artwork ?? coverImage, slug, "release");

  return (
    <div
      className={className}
      style={
        bgAccent
          ? { boxShadow: `inset 0 0 120px ${bgAccent}18` }
          : undefined
      }
    >
      <PlaceholderImage
        src={src}
        alt={`${title} artwork`}
        variant="release"
        label={title}
        sublabel={type}
        aspectRatio={aspectRatio}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      />
    </div>
  );
}

