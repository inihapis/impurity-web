import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SectionImage({
  src,
  alt,
  className,
}: SectionImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-102 group-hover:grayscale-0",
        className,
      )}
    />
  );
}