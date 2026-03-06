export type Artwork = {
  id: string;
  title: string;
  category: string;
  image: string;
  medium: string
  thumbnail: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Highland Valley",
    category: "Mountains",
    medium: "Oil on Canvas",
    image: "artworks/originals/highland-valley.jpg",
    thumbnail: "artworks/thumbs/highland-valley.jpg",
  },
];
