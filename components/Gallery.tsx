"use client";

import { useRouter } from "next/navigation";
import type { Artwork } from "@/lib/getArtworks";

export default function Gallery({ artworks }: { artworks: Artwork[] }) {
  const router = useRouter();

  return (
    <div className="gallery-container">
      {artworks.map((art) => (
        <div
          key={art.id}
          className="gallery-item"
          onClick={() => router.push(`/artwork/${art.id}`)}
        >
          <img
            src={`/art-gallery/${art.thumbnail}`}
            alt={art.title}
            className="gallery-image"
          />
          <p className="gallery-title">{art.title}</p>
        </div>
      ))}
    </div>
  );
}