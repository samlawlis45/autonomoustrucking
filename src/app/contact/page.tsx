"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  const CONTACT_EMAIL = "ip@achortrust.co";

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --black: #000000;
          --off-black: #0A0A0A;
          --dark-gray: #1A1A1A;
          --medium-gray: #2A2A2A;
          --light-gray: #6B6B6B;
          --text-gray: #9B9B9B;
          --border-gray: #2A2A2A;
          --white: #FFFFFF;
          --accent: #FF4B1F;
          --accent-hover: #FF6B3F;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: var(--black);
          color: var(--white);
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-gray);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.5px;
          text-decoration: none;
          color: var(--white);
          transition: opacity 0.2s ease;
        }

        .nav-logo:hover {
          opacity: 0.8;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 48px;
          list-style: none;
        }

        .nav-link {
          color: var(--white);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2px;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--white);
        }

        .nav-cta {
          padding: 10px 24px;
          background: var(--white);
          color: var(--black);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2px;
          border: 1px solid var(--white);
          transition: all 0.2s ease;
        }

        .nav-cta:hover {
          background: transparent;
          color: var(--white);
        }

        .section {
          padding: 120px 0;
          position: relative;
        }

        .section-dark {
          background: var(--off-black);
        }

        .section-header {
          margin-bottom: 80px;
        }

        .section-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 24px;
        }

        .section-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .section-description {
          font-size: 18px;
          color: var(--white);
          max-width: 600px;
        }

        .btn {
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s ease;
          cursor: pointer;
          border: 1px solid;
        }

        .btn-primary {
          background: var(--white);
          color: var(--black);
          border-color: var(--white);
        }

        .btn-primary:hover {
          background: transparent;
          color: var(--white);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border-color: var(--border-gray);
        }

        .btn-secondary:hover {
          border-color: var(--white);
          background: var(--dark-gray);
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
      <main>
      {/* Site Nav (matches homepage) */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo">autonomoustrucking.ai</Link>
          <ul className="nav-menu">
            <li><Link href="/#portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link href="/#network" className="nav-link">Network</Link></li>
            <li><Link href="/#advantages" className="nav-link">Advantages</Link></li>
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
              <form method="POST" action={process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/xkgvabaa"} className="grid grid-cols-1 gap-4">
                <input type="hidden" name="_subject" value="AutonomousTrucking.ai contact" />
                <input type="text" name="_gotcha" style={{display:'none'}} />
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
              <p style={{marginTop:'12px', fontSize:'12px', color:'var(--white)'}}>Secure transactions via Escrow.com.</p>
            </div>

            <div style={{background:'var(--black)', border:'1px solid var(--border-gray)', padding:'32px'}}>
              <h3 style={{fontSize:'18px', fontWeight:600, marginBottom:'8px'}}>Direct email</h3>
              <p><a href={`mailto:${CONTACT_EMAIL}`} style={{color:'var(--white)', textDecoration:'underline'}}>{CONTACT_EMAIL}</a></p>
              <p style={{marginTop:'16px', color:'var(--white)', fontWeight:600}}>Transaction supported through AnchorTrust Holdings, LLC</p>
              <p style={{marginTop:'8px', color:'var(--white)'}}>We typically respond within 1 business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}


