import fs from "fs";
import path from "path";
import artworkData from "./artworkData.json";

export type Artwork = {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
  order: number;
  price: string;
  description: string;
  medium: string;
  size: string;
};

export function getArtworks(): Artwork[] {
  const dir = path.join(process.cwd(), "public/artworks/originals");
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  return files
    .map((file) => {
      const name = file.replace(/\.[^/.]+$/, "");
      /*const title = name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());*/
      const title = name
          .replace(/-/g, " ")
          .replace(/(^|\s)\w/g, l => l.toUpperCase());
      const data = artworkData[name as keyof typeof artworkData];

      return {
        id: name,
        title,
        image: `artworks/originals/${file}`,
        thumbnail: `artworks/thumbs/${file}`,
        order: Number(data?.order ?? 999),
        price: data?.price ?? "£POA",
        description: data?.description ?? "Original landscape painting. Please enquire for more details.",
        medium: data?.medium ?? "Oil on canvas",
        size: data?.size ?? "Please enquire for size details",
      };
    })
    .sort((a, b) => a.order - b.order);
}