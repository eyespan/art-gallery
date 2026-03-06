"use client"

import Image from "next/image"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

type Artwork = {
  id: string
  title: string
  image: string
}

export default function Gallery({ artworks }: { artworks: Artwork[] }) {

  const [index, setIndex] = useState(-1)

  const slides = artworks.map((art) => ({
    src: art.image,
  }))

  return (
    <div className="px-6 py-10">

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        {artworks.map((art, i) => (

          <div
            key={art.id}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setIndex(i)}
          >

            <Image
              src={art.image}
              alt={art.title}
              width={800}
              height={1000}
              className="w-full rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />

          </div>

        ))}

      </div>

      {/* Lightbox */}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
      />

    </div>
  )
}

