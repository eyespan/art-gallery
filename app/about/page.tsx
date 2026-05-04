import Link from "next/link";
import Image from 'next/image';

export default function AboutPage() {
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
          The Artist
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#1e3a42",
        }}>
          About
        </h1>
      </section>

      {/* Bio + Photo */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "4rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Photo */}
        <div>
          <div style={{
            width: "100%",
            aspectRatio: "3/4",
            background: "#e8e0d8",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#aaa",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Replace with: <img src="/art-gallery/artist-photo.jpg" alt="lklandscape" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
            <Image src="/art-gallery/liga-artist-profile.jpg" alt="lklandscape"  fill style={{ objectFit: 'cover' }} /> 
            <span>Artist Photo</span>
          </div>
          <p style={{
            marginTop: "0.75rem",
            fontSize: "0.82rem",
            color: "#aaa",
            textAlign: "center",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            {/* Replace with a caption */}
            lklandscape Art — Studio, 2026
          </p>
        </div>

        {/* Bio */}
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#1e3a42",
            marginBottom: "1.5rem",
          }}>
            lklandscape Art
          </h2>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "1.2rem",
          }}>
            {/* Replace with real bio */}
            My work is rooted in a lifelong connection to the natural world. Growing up 
            surrounded by rolling meadows, dense forests, and beautiful rivers shaped not 
            only my imagination, but the way I see and interpret landscape today. Those early 
            memories of the countryside continue to influence my artistic vision, guiding the 
            way I observe light, colour, and atmosphere in every place I paint.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "1.2rem",
          }}>
            {/* Replace with real bio continued */}
            Now based in Cambridge, where I have lived for several decades and developed a 
            deep connection to the surrounding landscapes, I work primarily in acrylics. I draw 
            inspiration from the quiet beauty of the English countryside: Cambridgeshire, 
            Norfolk, Suffolk, and the Cotswolds, as well as landscapes encountered 
            throughout my travels. Every place I paint has something unique about it, and I try 
            to share that feeling with viewers.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
          }}>
            {/* Replace with real bio continued */}
            My creative process begins outdoors, where I make sketches and notes in 
            response to the changing light, textures, and mood of the landscape. These 
            studies become the foundation for the paintings I complete in my studio, where I 
            explore layering, colour, and texture to build depth and atmosphere. My passion 
            for painting comes not only from nature, but also from my love of flowers and their 
            vibrant colours. I’m especially drawn to rich hues and the beautiful patterns I see in 
            fabrics and interiors.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
          }}>
            {/* Replace with real bio continued */}
            Each painting captures a moment and a feeling. I try to show not just the beauty of 
            a place, but also the calm, reflection, and connection it can bring.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
          }}>
            {/* Replace with real bio continued */}
            I studied Fine Art at the London Art College, where I developed my technical skills 
            and deepened my understanding of composition, colour, and light. Today, I 
            continue to explore how nature makes me feel and to capture the timeless beauty 
            of the landscapes that inspire me.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            color: "#555",
          }}>
            {/* Replace with real bio continued */}
            Through my art, I hope to inspire people to pause and enjoy the calm and beauty 
            of nature.
           </p> 
        </div>
      </section>

      {/* Artist Statement */}
      <section style={{
        background: "#f7f4f0",
        borderTop: "1px solid #e8e0d8",
        borderBottom: "1px solid #e8e0d8",
        padding: "4rem 2rem",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#9aaf4a",
            marginBottom: "1rem",
          }}>
            Artist Statement
          </p>
          <blockquote style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            color: "#1e3a42",
            lineHeight: 1.6,
            fontStyle: "italic",
            margin: "0 0 1.5rem",
            borderLeft: "3px solid #9aaf4a",
            paddingLeft: "1.5rem",
            textAlign: "left",
          }}>
            {/* Replace with real artist statement */}
            My work is rooted in a deep love for the natural world — the way light
            falls across a hillside at dusk, the stillness of water in winter, the
            unexpected colour in an overcast sky.
          </blockquote>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#666",
            textAlign: "left",
          }}>
            {/* Replace with extended statement */}
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </section>

      {/* Exhibition History */}
      <section style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4rem 2rem 5rem",
      }}>
        <p style={{
          fontSize: "0.8rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9aaf4a",
          marginBottom: "0.75rem",
          textAlign: "center",
        }}>
          Exhibition History
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          color: "#1e3a42",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}>
          Shows &amp; Exhibitions
        </h2>

        {[
          { year: "26 May - 6 July 2026", title: "English Landscapes", venue: "Hot Numbers Coffee Roasters, Trumpington Street, Cambridge, CB2 1QA" },
        ].map((ex, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            gap: "1rem",
            padding: "1.25rem 0",
            borderBottom: "1px solid #e8e0d8",
            alignItems: "start",
          }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#9aaf4a",
            }}>
              {ex.year}
            </span>
            <div>
              <p style={{ fontSize: "1rem", color: "#1e3a42", fontWeight: 600, marginBottom: "0.2rem" }}>
                {ex.title}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#888" }}>
                {ex.venue}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "3rem 2rem 5rem",
        background: "linear-gradient(160deg, #f7f4f0 0%, #eef3f5 100%)",
        borderTop: "1px solid #e8e0d8",
      }}>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "1.5rem" }}>
          Interested in a painting or commission?
        </p>
        <Link href="/contact" style={{
          display: "inline-block",
          padding: "0.85rem 2.5rem",
          background: "#2c5f6e",
          color: "white",
          fontSize: "0.9rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: "2px",
        }}>
          Get in Touch
        </Link>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap');
        @media (max-width: 768px) {
          section:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
