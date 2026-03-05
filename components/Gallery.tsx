import Image from "next/image";
import { getArtworks } from "@/lib/getArtworks";

export default function Gallery() {
  const artworks = getArtworks();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "20px"
      }}
    >
      {artworks.map(a => (
        <a key={a.id} href={a.image} target="_blank">
          <Image
            src={a.thumbnail}
            alt={a.title}
            width={400}
            height={300}
          />
          <p>{a.title}</p>
        </a>
      ))}
    </div>
  );
}
