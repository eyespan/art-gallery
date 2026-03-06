import Image from "next/image";
import { getArtworks } from "@/lib/getArtworks";

export default function Gallery() {
  const artworks = getArtworks();

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {artworks.map((art) => (
          <div key={art.id} className="text-center">
            <a href={art.image} target="_blank">
              <Image
                src={art.thumbnail}
                alt={art.title}
                width={600}
                height={400}
                className="rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              />
            </a>

            <p className="mt-4 text-lg font-medium">{art.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
