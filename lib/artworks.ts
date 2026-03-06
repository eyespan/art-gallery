export type Artwork = {
  id: string
  title: string
  image: string
  thumbnail: string
  medium?: string
  width?: number
  height?: number
  category?: string
}



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
