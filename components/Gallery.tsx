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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          padding: "1.5rem 3rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {artworks.map((art, i) => (
          <div
            key={art.id}
            onClick={() => setIndex(i)}
            style={{
              cursor: "pointer",
              borderRadius: "6px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={`/art-gallery/${art.thumbnail}`}
              alt={art.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <p
              style={{
                textAlign: "center",
                padding: "0.6rem",
                margin: 0,
                fontSize: "14px",
                background: "white",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#444",
                letterSpacing: "0.02em",
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