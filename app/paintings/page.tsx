import { getArtworks } from "@/lib/getArtworks";
import Gallery from "@/components/Gallery";

export default function PaintingsPage() {
  const artworks = getArtworks();

  return (
    <main>
      <div style={{
        textAlign: "center",
        padding: "3rem 2rem 1rem",
        borderBottom: "1px solid #e8e0d8",
        background: "linear-gradient(160deg, #f7f4f0 0%, #eef3f5 100%)",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.8rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9aaf4a",
          marginBottom: "0.6rem",
        }}>
          Original Works
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#1e3a42",
          marginBottom: "0.75rem",
        }}>
          Paintings
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.05rem",
          color: "#888",
          marginBottom: "1rem",
        }}>
          Click any painting to view full size
        </p>
      </div>

      <Gallery artworks={artworks} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');
      `}</style>
    </main>
  );
}
