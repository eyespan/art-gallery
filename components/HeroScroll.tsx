"use client";

import { useRef } from "react";
import type { Artwork } from "@/lib/getArtworks";

export default function HeroScroll({ artworks }: { artworks: Artwork[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          left: "0.75rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid #ddd",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          fontSize: "1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          color: "#2c5f6e",
        }}
      >
        ‹
      </button>

      {/* Scrolling strip */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "0.5rem 3.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {artworks.map((art) => (
          <a
            key={art.id}
            href={`/art-gallery/${art.id}`}
            style={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              width: "280px",
              textDecoration: "none",
              color: "inherit",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={`/art-gallery/${art.thumbnail}`}
              alt={art.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{
              padding: "0.75rem 1rem",
              background: "white",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "0.9rem",
              color: "#444",
              textAlign: "center",
              letterSpacing: "0.03em",
            }}>
              {art.title}
            </div>
          </a>
        ))}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          right: "0.75rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid #ddd",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          fontSize: "1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          color: "#2c5f6e",
        }}
      >
        ›
      </button>
    </div>
  );
}
