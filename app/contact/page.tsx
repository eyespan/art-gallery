"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form submission e.g. Formspree, EmailJS etc.
    // For now just show success state
    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* Page Header */}
      <section style={{
        textAlign: "center",
        padding: "3.5rem 2rem 2.5rem",
        background: "linear-gradient(160deg, #f7f4f0 0%, #eef3f5 100%)",
        borderBottom: "1px solid #e8e0d8",
      }}>
        <p style={{
          fontSize: "0.8rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9aaf4a",
          marginBottom: "0.6rem",
        }}>
          Say Hello
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#1e3a42",
        }}>
          Contact
        </h1>
      </section>

      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "4rem 2rem 5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: "5rem",
        alignItems: "start",
      }}>

        {/* Left — Info */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#1e3a42",
            marginBottom: "1rem",
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#666",
            marginBottom: "2.5rem",
          }}>
            {/* Replace with real intro */}
            Whether you are interested in purchasing a painting, commissioning
            a new work, or simply want to say hello — I would love to hear from you.
          </p>

          {/* Email */}
          <div style={{ marginBottom: "1.75rem" }}>
            <p style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9aaf4a",
              marginBottom: "0.35rem",
            }}>
              Email
            </p>
            <a
              href="mailto:hello@lklandscapeart.com"
              style={{ fontSize: "1rem", color: "#2c5f6e", textDecoration: "none" }}
            >
              {/* Replace with real email */}
              hello@lklandscapeart.com
            </a>
          </div>

          {/* Location */}
          <div style={{ marginBottom: "1.75rem" }}>
            <p style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9aaf4a",
              marginBottom: "0.35rem",
            }}>
              Location
            </p>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.7 }}>
              {/* Replace with real location */}
              Studio based in<br />
              Placeholder Town, United Kingdom
            </p>
          </div>

          {/* Social Links */}
          <div>
            <p style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9aaf4a",
              marginBottom: "0.75rem",
            }}>
              Follow
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/lklandscapeart" },
                { label: "Facebook", href: "https://facebook.com/lklandscapeart" },
                { label: "Twitter / X", href: "https://twitter.com/lklandscapeart" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1rem",
                    color: "#2c5f6e",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  ↗ {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {submitted ? (
            <div style={{
              padding: "3rem 2rem",
              background: "#f0f7f4",
              border: "1px solid #c5ddd5",
              borderRadius: "4px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.4rem",
                color: "#1e3a42",
                marginBottom: "0.75rem",
              }}>
                Thank you!
              </p>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                Your message has been sent. I will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "Commission enquiry" },
              ].map((field) => (
                <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label htmlFor={field.id} style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                  }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ddd",
                      borderRadius: "2px",
                      fontSize: "1rem",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: "#333",
                      outline: "none",
                      background: "#fff",
                    }}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label htmlFor="message" style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#888",
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your enquiry..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    padding: "0.75rem 1rem",
                    border: "1px solid #ddd",
                    borderRadius: "2px",
                    fontSize: "1rem",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#333",
                    outline: "none",
                    resize: "vertical",
                    background: "#fff",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.9rem 2.5rem",
                  background: "#2c5f6e",
                  color: "white",
                  border: "none",
                  borderRadius: "2px",
                  fontSize: "0.9rem",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  transition: "background 0.2s",
                }}
              >
                Send Message
              </button>

              <p style={{ fontSize: "0.82rem", color: "#aaa", marginTop: "0.25rem" }}>
                {/* Replace with Formspree or EmailJS integration for real submissions */}
                ✦ This form is a placeholder — connect to Formspree or EmailJS to enable real submissions.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');
        input:focus, textarea:focus {
          border-color: #2c5f6e !important;
          box-shadow: 0 0 0 2px rgba(44,95,110,0.1);
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}
