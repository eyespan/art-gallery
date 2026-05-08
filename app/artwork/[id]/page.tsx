import { getArtworks } from "@/lib/getArtworks";
import Link from "next/link";

export function generateStaticParams() {
  return getArtworks().map(a => ({ id: a.id }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artworks = getArtworks();
  const currentIndex = artworks.findIndex(a => a.id === id);
  const art = artworks[currentIndex];

  if (!art) return <p>Artwork not found</p>;

  const prev = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const next = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* Breadcrumb + Prev/Next nav */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2.5rem",
        borderBottom: "1px solid #e8e0d8",
        fontSize: "0.8rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#888",
      }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Link href="/paintings" style={{ color: "#888", textDecoration: "none" }}>
            Paintings
          </Link>
          <span>›</span>
          <span style={{ color: "#2c5f6e" }}>{art.title}</span>
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {prev ? (
            <Link
              href={`/artwork/${prev.id}`}
              style={{ color: "#888", textDecoration: "none" }}
            >
              ‹ Previous
            </Link>
          ) : (
            <span style={{ color: "#ccc" }}>‹ Previous</span>
          )}
          <span style={{ color: "#ddd" }}>/</span>
          {next ? (
            <Link
              href={`/artwork/${next.id}`}
              style={{ color: "#888", textDecoration: "none" }}
            >
              Next ›
            </Link>
          ) : (
            <span style={{ color: "#ccc" }}>Next ›</span>
          )}
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="artwork-detail">

        {/* Left — Image */}
        <div className="artwork-image-col">
          <img
            src={`/${art.image}`}
            alt={art.title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Right — Details */}
        <div className="artwork-info-col">
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#1e3a42",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}>
            {art.title}
          </h1>

          <p style={{
            fontSize: "1.5rem",
            color: "#2c5f6e",
            fontWeight: 600,
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}>
            {art.price}
          </p>

          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "2rem",
          }}>
            {art.description}
          </p>

          <div style={{
            borderTop: "1px solid #e8e0d8",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            marginBottom: "2rem",
          }}>
            {[
              { label: "Title", value: art.title },
              { label: "Medium", value: art.medium },
              { label: "Size", value: art.size },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem" }}>
                <span style={{ color: "#999", minWidth: "80px" }}>{label}:</span>
                <span style={{ color: "#333" }}>{value}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.5rem",
              background: "#2c5f6e",
              color: "white",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              marginBottom: "1rem",
            }}
          >
            Enquire About This Painting
          </Link>

          <div>
            <Link
              href="/paintings"
              style={{
                fontSize: "0.85rem",
                color: "#888",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ← Back to Paintings
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');

        .artwork-detail {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2.5rem 5rem;
          align-items: start;
        }

        .artwork-image-col {
          position: sticky;
          top: 90px;
        }

        .artwork-info-col {
          padding-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .artwork-detail {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1.25rem 3rem;
          }
          .artwork-image-col {
            position: static;
          }
        }
      `}</style>
    </main>
  );
}