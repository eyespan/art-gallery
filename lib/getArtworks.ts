import fs from "fs";
import path from "path";

export type Artwork = {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
};

export function getArtworks(): Artwork[] {
  const dir = path.join(process.cwd(), "public/artworks/originals");
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  return files.map((file) => {
    const name = file.replace(/\.[^/.]+$/, "");
    const title = name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    return {
      id: name,
      title,
      image: `artworks/originals/${file}`,
      thumbnail: `artworks/thumbs/${file}`,
    };
  });
}