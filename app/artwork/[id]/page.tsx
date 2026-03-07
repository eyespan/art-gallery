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
  const art = getArtworks().find(a => a.id === id);

  if (!art) return <p>Artwork not found</p>;

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        ← Back to gallery
      </Link>
      <h1 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>{art.title}</h1>
      <img
        src={`/art-gallery/${art.image}`}
        alt={art.title}
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </main>
  );
}