import { getArtworks } from "@/lib/getArtworks"
import Gallery from "@/components/Gallery"

export default async function Page() {

  const artworks = await getArtworks()

  return (
    <main>
      <Gallery artworks={artworks} />
    </main>
  )
}
