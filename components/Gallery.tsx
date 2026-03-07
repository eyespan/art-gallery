"use client";

import { useState } from "react";
import type { Artwork } from "@/lib/getArtworks";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ artworks }: { artworks: Artwork[] }) {
  const [index, setIndex] = useState(-1);

  const currentArt = index >= 0 ? artworks[index] : null;

  return (
    <>
      <div
        style={{
          columnCount: 3,
          columnGap: "1.25rem",
          padding: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {artworks.map((art, i) => (
          <div
            key={art.id}
            onClick={() => setIndex(i)}
            style={{
              breakInside: "avoid",
              marginBottom: "1.25rem",
              cursor: "pointer",
            }}
          >
            <img
              src={`/art-gallery/${art.thumbnail}`}
              alt={art.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              {art.title}
            </p>
          </div>
        ))}
      </div>

      <Lightbox
        slides={artworks.map((a) => ({ src: `/art-gallery/${a.image}` }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        render={{
          buttonPrev: undefined,
          buttonNext: undefined,
          iconClose: undefined,
        }}
        toolbar={{
          buttons: [
            ...(currentArt
              ? [
                  <a
                    key="view-full"
                    href={`/art-gallery/artwork/${currentArt.id}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                      padding: "6px 12px",
                      border: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: "4px",
                      margin: "auto 8px auto 0",
                      whiteSpace: "nowrap" as const,
                      alignSelf: "center",
                    }}
                  >
                    View Full Size ↗
                  </a>,
                ]
              : []),
            "zoom",
            "close",
          ],
        }}
      />
    </>
  );
}