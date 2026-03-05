"use client";

export default function FilterBar({ categories, active, onChange }: any) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => onChange("All")}>
        All
      </button>
      {categories.map((c: string) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          style={{ marginLeft: "10px" }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
