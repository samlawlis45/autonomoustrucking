import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact | autonomoustrucking.ai",
  description: "Get in touch about the autonomous trucking domain portfolio.",
};

export default function ContactPage() {
  const CONTACT_EMAIL = "ip@achortrust.co";

  return (
    <main>
      {/* Site Nav (matches homepage) */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo">autonomoustrucking.ai</Link>
          <ul className="nav-menu">
            <li><Link href="/#portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link href="/#network" className="nav-link">Network</Link></li>
            <li><Link href="/#advantages" className="nav-link">Advantages</Link></li>
            <li><Link href="/blog" className="nav-link">Insights</Link></li>
            <li><Link href="/press" className="nav-link">Press</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
          <Link href="/contact" className="nav-cta">Inquire</Link>
        </div>
      </nav>

      {/* Contact Section styled like site sections */}
      <section className="section section-dark" id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Get in touch</div>
            <h2 className="section-title">Contact</h2>
            <p className="section-description">We&apos;re engaging a small set of strategic buyers before broader listing.</p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:'40px'}}>
            <div style={{background:'var(--off-black)', border:'1px solid var(--border-gray)', padding:'32px'}}>
              <form method="POST" action={undefined} className="grid grid-cols-1 gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your name" style={{width:'100%', background:'var(--dark-gray)', color:'var(--white)', border:'1px solid var(--border-gray)', padding:'12px 14px'}} />
                  <input name="company" placeholder="Company" style={{width:'100%', background:'var(--dark-gray)', color:'var(--white)', border:'1px solid var(--border-gray)', padding:'12px 14px'}} />
                </div>
                <input type="email" name="email" required placeholder="Email" style={{width:'100%', background:'var(--dark-gray)', color:'var(--white)', border:'1px solid var(--border-gray)', padding:'12px 14px'}} />
                <textarea name="message" rows={5} placeholder="Message" style={{width:'100%', background:'var(--dark-gray)', color:'var(--white)', border:'1px solid var(--border-gray)', padding:'12px 14px'}} />
                <div className="cta-actions" style={{justifyContent:'flex-start'}}>
                  <button type="submit" className="btn btn-primary">Send</button>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-secondary">or email us directly</a>
                </div>
              </form>
              <p style={{marginTop:'12px', fontSize:'12px', color:'var(--text-gray)'}}>Secure transactions via Escrow.com or Dan.com.</p>
            </div>

            <div style={{background:'var(--black)', border:'1px solid var(--border-gray)', padding:'32px'}}>
              <h3 style={{fontSize:'18px', fontWeight:600, marginBottom:'8px'}}>Direct email</h3>
              <p><a href={`mailto:${CONTACT_EMAIL}`} style={{color:'var(--white)', textDecoration:'underline'}}>{CONTACT_EMAIL}</a></p>
              <p style={{marginTop:'16px', color:'var(--text-gray)'}}>We typically respond within 1 business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


