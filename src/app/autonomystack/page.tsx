"use client";

import React from 'react';
import Link from 'next/link';

export default function AutonomyStackPage() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #000000;
          color: #FFFFFF;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          padding: 120px 0 80px;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .hero p {
          font-size: 20px;
          color: #9B9B9B;
          max-width: 600px;
          margin: 0 auto 48px;
        }

        .cta {
          display: inline-block;
          padding: 14px 32px;
          background: #FFFFFF;
          color: #000000;
          text-decoration: none;
          font-weight: 600;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .cta:hover {
          background: #FF4B1F;
          color: #FFFFFF;
        }

        .back-link {
          display: inline-block;
          margin-top: 32px;
          color: #9B9B9B;
          text-decoration: none;
          font-size: 14px;
        }

        .back-link:hover {
          color: #FFFFFF;
        }
      `}</style>

      <div className="container">
        <div className="hero">
          <h1>Autonomous Stack</h1>
          <p>
            The complete technology stack for autonomous vehicle operations. 
            This domain captures the technical infrastructure that powers autonomous trucking.
          </p>
          <a href="mailto:ip@anchortrust.co?subject=Autonomous Stack Domain Inquiry" className="cta">
            Inquire About This Domain
          </a>
          <br />
          <Link href="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    </>
  );
}
