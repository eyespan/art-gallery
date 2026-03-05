"use client";

import Image from "next/image";
import { useState } from "react";
import { artworks } from "@/lib/artworks";
import FilterBar from "@/components/FilterBar";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = Array.from(new Set(artworks.map(a => a.category)));

  const filtered =
    filter === "All"
      ? artworks
      : artworks.filter(a => a.category === filter);

  return (
    <div>
      <FilterBar
        categories={categories}
        active={filter}
        onChange={setFilter}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "20px" }}>
        {filtered.map(a => (
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
    </div>
  );
}
