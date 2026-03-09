"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/art-gallery", label: "Home" },
    { href: "/art-gallery/paintings", label: "Paintings" },
    { href: "/art-gallery/about", label: "About" },
    { href: "/art-gallery/contact", label: "Contact" },
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(255,255,255,0.97)",
      borderBottom: "1px solid #e8e0d8",
      backdropFilter: "blur(8px)",
      padding: "0 2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
      boxShadow: "0 1px 12px rgba(0,0,0,0.06)",
    }}>
      {/* Artist Name */}
      <Link href="/art-gallery" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#2c5f6e",
            letterSpacing: "0.01em",
          }}>
            lklandscape
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.78rem",
            fontWeight: 400,
            color: "#9aaf4a",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}>
            Art
          </span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map((link) => {
          const isActive = pathname === link.href || pathname === link.href + "/";
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.92rem",
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: isActive ? "#2c5f6e" : "#555",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #2c5f6e" : "2px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          color: "#2c5f6e",
        }}
        aria-label="Toggle menu"
        className="hamburger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "70px",
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #e8e0d8",
          padding: "1rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2c5f6e",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');
        @media (max-width: 640px) {
          nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
