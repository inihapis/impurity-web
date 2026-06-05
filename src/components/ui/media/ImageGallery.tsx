"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resolveImagePath } from "@/lib/images";
import type { PlaceholderVariant } from "@/lib/images";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  coverImage?: string;
  gallery?: GalleryImage[];
  slug: string;
  title: string;
  variant: PlaceholderVariant;
}

export function ImageGallery({
  coverImage,
  gallery = [],
  slug,
  title,
  variant,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Build unified lightbox array: cover first, then gallery items
  const allImages: GalleryImage[] = [];
  if (coverImage) {
    allImages.push({
      src: resolveImagePath(coverImage, slug, variant) || "",
      alt: title,
    });
  }
  gallery.forEach((img) => {
    allImages.push({
      src: resolveImagePath(img.src, slug, variant) || img.src,
      alt: img.alt,
    });
  });

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + allImages.length) % allImages.length
      );
    }
  };

  // Key handler for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight" && selectedIndex !== null)
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    if (e.key === "ArrowLeft" && selectedIndex !== null)
      setSelectedIndex(
        (selectedIndex - 1 + allImages.length) % allImages.length
      );
  };

  if (allImages.length === 0) return null;

  const gridCols =
    variant === "archive"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      : variant === "journal"
        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        : "grid-cols-2 md:grid-cols-3";

  return (
    <>
      <div className="w-full">
        {/* Cover / Featured Image */}
        {coverImage && (
          <div
            className={`cursor-zoom-in ${
              variant === "campaign"
                ? "overflow-hidden border border-border"
                : "mx-auto w-full max-w-4xl"
            }`}
            onClick={() => openLightbox(0)}
            title="Klik untuk memperbesar"
          >
            <img
              src={allImages[0].src}
              alt={allImages[0].alt}
              className={`border border-border bg-surface transition-opacity hover:opacity-90 ${
                variant === "campaign"
                  ? "h-auto w-full object-contain"
                  : "h-auto w-full mb-12"
              }`}
            />
          </div>
        )}

        {/* Gallery Grid (shown below cover) */}
        {gallery.length > 0 && (
          <div
            className={`mx-auto ${
              variant === "campaign"
                ? "mt-6 max-w-none"
                : "mt-8 max-w-4xl"
            }`}
          >
            <p className="font-mono mb-5 text-[10px] tracking-[0.2em] text-muted uppercase border-b border-border/40 pb-3">
              Gallery · {gallery.length} foto
            </p>
            <div className={`grid gap-2 ${gridCols}`}>
              {gallery.map((img, idx) => {
                const actualIndex = coverImage ? idx + 1 : idx;
                const resolvedSrc =
                  resolveImagePath(img.src, slug, variant) || img.src;
                return (
                  <div
                    key={idx}
                    className="cursor-zoom-in overflow-hidden border border-border/50 bg-surface group relative aspect-square"
                    onClick={() => openLightbox(actualIndex)}
                    title={img.alt}
                  >
                    <img
                      src={resolvedSrc}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background/97 backdrop-blur-2xl"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10 bg-linear-to-b from-background/80 to-transparent">
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {selectedIndex + 1} / {allImages.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="p-2 text-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center px-16 py-16">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                src={allImages[selectedIndex].src}
                alt={allImages[selectedIndex].alt}
                className="max-h-full max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Alt text caption */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center px-5 pb-5 bg-linear-to-t from-background/80 to-transparent">
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase text-center">
                {allImages[selectedIndex].alt}
              </p>
            </div>

            {/* Prev / Next */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-6 p-3 rounded-full bg-surface border border-border text-muted hover:text-foreground hover:border-border/80 transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-6 p-3 rounded-full bg-surface border border-border text-muted hover:text-foreground hover:border-border/80 transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
