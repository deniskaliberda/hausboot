"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import type { PropertyImage } from "@/types/property";

interface PhotoGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export function PhotoGallery({ images, propertyName }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goTo = useCallback(
    (direction: "prev" | "next") => {
      if (lightboxIndex === null) return;
      const len = images.length;
      setLightboxIndex(
        direction === "next"
          ? (lightboxIndex + 1) % len
          : (lightboxIndex - 1 + len) % len
      );
    },
    [lightboxIndex, images.length]
  );

  // Show first 5 images in the grid
  const gridImages = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      {/* Photo grid - Airbnb-style 5-photo layout */}
      <div className="relative grid gap-2 sm:grid-cols-4 sm:grid-rows-2 sm:aspect-[2/1]">
        {/* Hero image */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:rounded-r-none"
        >
          <Image
            src={gridImages[0].url}
            alt={gridImages[0].alt_text}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
        </button>

        {/* Smaller images */}
        {gridImages.slice(1).map((image, i) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openLightbox(i + 1)}
            className={`relative hidden aspect-auto overflow-hidden bg-muted sm:block ${
              i === 1 ? "sm:rounded-tr-xl" : i === 3 ? "sm:rounded-br-xl" : ""
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt_text}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="25vw"
            />
          </button>
        ))}

        {/* "Show all photos" button */}
        {images.length > 5 && (
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-background/90 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-background"
          >
            <Grid className="h-4 w-4" />
            Alle {images.length} Fotos
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
          role="dialog"
          aria-label={`Foto ${lightboxIndex + 1} von ${images.length} – ${propertyName}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Schließen"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo("prev");
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Vorheriges Foto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt_text}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo("next");
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Nächstes Foto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Caption */}
          <p className="absolute bottom-4 left-1/2 z-10 max-w-lg -translate-x-1/2 text-center text-sm text-white/70">
            {images[lightboxIndex].alt_text}
          </p>
        </div>
      )}
    </>
  );
}
