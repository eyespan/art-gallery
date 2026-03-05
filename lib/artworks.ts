export type Artwork = {
  id: string;
  title: string;
  category: string;
  image: string;
  thumbnail: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Highland Valley",
    category: "Mountains",
    image: "/artworks/originals/spring-1.jpg",
    thumbnail: "/artworks/thumbs/spring-1.jpg",
  },
];
