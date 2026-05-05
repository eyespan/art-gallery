import fs from "fs";
import path from "path";

export type Artwork = {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
  price: string;
  description: string;
  medium: string;
  size: string;
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
      // Replace these placeholders with real data per painting
      price: "£POA",
      description: "A beautiful original landscape painting. This piece captures the quiet beauty of the natural world — light, season and place coming together in a single moment. Available as an original or as a print.",
      medium: "Oil on canvas",
      size: "Please enquire for size details",
    };
  });
}