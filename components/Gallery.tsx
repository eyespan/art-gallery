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
      <div className="gallery-grid">
        {artworks.map((art, i) => (
          <div
            key={art.id}
            onClick={() => setIndex(i)}
            className="gallery-card"
          >
            <img
              src={`/art-gallery/${art.thumbnail}`}
              alt={art.title}
              className="gallery-card-img"
            />
            <p className="gallery-card-title">{art.title}</p>
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

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 1.5rem 3rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .gallery-card {
          cursor: pointer;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .gallery-card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .gallery-card-title {
          text-align: center;
          padding: 0.6rem;
          margin: 0;
          font-size: 14px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: #444;
          letter-spacing: 0.02em;
        }

        @media (max-width: 1000px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 1.5rem 2rem;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}