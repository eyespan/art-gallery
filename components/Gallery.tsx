"use client";

import type { Artwork } from "@/lib/getArtworks";

export default function Gallery({ artworks }: { artworks: Artwork[] }) {
  return (
    <>
      <div className="gallery-grid">
        {artworks.map((art) => (
          <a
            key={art.id}
            href={`/artwork/${art.id}`}
            className="gallery-card"
          >
            <img
              src={`/${art.thumbnail}`}
              alt={art.title}
              className="gallery-card-img"
            />
            <p className="gallery-card-title">{art.title}</p>
          </a>
        ))}
      </div>

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
          text-decoration: none;
          color: inherit;
          display: block;
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