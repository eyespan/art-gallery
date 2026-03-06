"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import type { Artwork } from "@/lib/artworks";

type GalleryProps = {
  artworks: Artwork[];
};

export default function Gallery({ artworks }: GalleryProps) {

  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <div className="gallery-container">

        {artworks.map((art: Artwork, i: number) => (
          <div
            key={art.id}
            className="gallery-item"
            onClick={() => setIndex(i)}
          >
            <Image
              src={art.thumbnail || art.image}
              alt={art.title}
              width={800}
              height={600}
              className="gallery-image"
            />

            <p className="gallery-title">{art.title}</p>
          </div>
        ))}

      </div>

      <Lightbox
        slides={artworks.map((a: Artwork) => ({ src: a.image }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
      />
    </>
  );
}
