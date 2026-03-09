import { getArtworks } from "@/lib/getArtworks";
import HeroScroll from "@/components/HeroScroll";
import Link from "next/link";

export default function HomePage() {
  const artworks = getArtworks();

  return (
    <main>
      {/* Hero / Welcome */}
      <section style={{
        minHeight: "420px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5rem 2rem 4rem",
        background: "linear-gradient(160deg, #f7f4f0 0%, #eef3f5 100%)",
        borderBottom: "1px solid #e8e0d8",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.85rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9aaf4a",
          marginBottom: "1.2rem",
        }}>
          Original Landscape Paintings
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 700,
          color: "#1e3a42",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
          maxWidth: "700px",
        }}>
          Welcome to lklandscape Art
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "540px",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
        }}>
          Exploring the quiet beauty of landscapes through acrylic and mixed media —
          each piece a moment of light, season and place.
        </p>
        <Link
          href="/paintings"
          style={{
            display: "inline-block",
            padding: "0.85rem 2.5rem",
            background: "#2c5f6e",
            color: "white",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
        >
          View All Paintings
        </Link>
      </section>

      {/* Explore Collection */}
      <section style={{ padding: "4rem 0 5rem" }}>
        <div style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          padding: "0 2rem",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#9aaf4a",
            marginBottom: "0.75rem",
          }}>
            The Collection
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
            color: "#1e3a42",
            marginBottom: "0.5rem",
          }}>
            Explore the Art
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.05rem",
            color: "#888",
            letterSpacing: "0.02em",
          }}>
            Scroll to discover — click any painting to view in full
          </p>
        </div>

        <HeroScroll artworks={artworks} />

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/paintings"
            style={{
              display: "inline-block",
              padding: "0.75rem 2.2rem",
              border: "1.5px solid #2c5f6e",
              color: "#2c5f6e",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "0.9rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            View All Paintings →
          </Link>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');
      `}</style>
    </main>
  );
}
