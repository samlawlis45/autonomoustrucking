"use client";

import React from 'react';
import Link from 'next/link';

export default function PressPage() {
  const pressReleases = [
    {
      title: "Premium Autonomous Trucking Domain Portfolio Launched",
      date: "2024-12-13",
      summary: "Comprehensive portfolio of 18 premium .AI domains covering the autonomous trucking namespace now available for strategic acquisition.",
      category: "Portfolio Launch"
    },
    {
      title: "Hub-to-Hub Logistics: The Future of Autonomous Freight",
      date: "2024-12-13",
      summary: "Analysis of hub-to-hub logistics as the optimal deployment model for autonomous trucking operations.",
      category: "Industry Analysis"
    },
    {
      title: "Domain Portfolio Strategy for Emerging Technologies",
      date: "2024-12-13",
      summary: "Comprehensive guide to building strategic domain portfolios in high-growth technology sectors.",
      category: "Strategy Guide"
    },
    {
      title: "Autonomous Trucking Market Reaches $2.5 Trillion Opportunity",
      date: "2024-12-13",
      summary: "Market analysis reveals massive growth potential in autonomous freight and logistics sectors.",
      category: "Market Analysis"
    }
  ];

  // Media kit data available for download
  // const mediaKit = {
  //   logo: "https://autonomoustrucking.ai/logo.png",
  //   images: [
  //     "https://autonomoustrucking.ai/og-image.png",
  //     "https://autonomoustrucking.ai/twitter-image.png"
  //   ],
  //   contact: "ip@anchortrust.co",
  //   website: "https://autonomoustrucking.ai"
  // };

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

        .press-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 80px 0;
        }

        .press-item {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .press-item:hover {
          background: #2A2A2A;
          border-color: #FF4B1F;
        }

        .press-category {
          font-size: 12px;
          color: #FF4B1F;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .press-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #FFFFFF;
        }

        .press-summary {
          color: #9B9B9B;
          margin-bottom: 16px;
        }

        .press-date {
          font-size: 12px;
          color: #6B6B6B;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .media-kit {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 48px;
          margin: 80px 0;
        }

        .media-kit h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 32px;
          color: #FF4B1F;
        }

        .media-kit h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 24px 0 16px;
        }

        .media-kit p {
          color: #E0E0E0;
          margin-bottom: 16px;
        }

        .media-kit ul {
          margin: 16px 0;
          padding-left: 24px;
        }

        .media-kit li {
          color: #E0E0E0;
          margin-bottom: 8px;
        }

        .contact-info {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 32px;
          margin: 48px 0;
        }

        .contact-info h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #FF4B1F;
        }

        .contact-info p {
          color: #E0E0E0;
          margin-bottom: 8px;
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
          <h1>Press & Media</h1>
          <p>
            Latest news, analysis, and insights on the autonomous trucking industry 
            and domain portfolio strategy.
          </p>
        </div>

        <div className="press-grid">
          {pressReleases.map((release, index) => (
            <div key={index} className="press-item">
              <div className="press-category">{release.category}</div>
              <h2 className="press-title">{release.title}</h2>
              <p className="press-summary">{release.summary}</p>
              <div className="press-date">{release.date}</div>
            </div>
          ))}
        </div>

        <div className="media-kit">
          <h2>Media Kit</h2>
          
          <h3>About the Portfolio</h3>
          <p>
            The autonomous trucking domain portfolio represents a comprehensive collection 
            of 18 premium .AI domains covering every aspect of the autonomous freight 
            industry. This strategic asset provides complete namespace control for 
            companies looking to establish market leadership in the $2.5 trillion 
            autonomous trucking market.
          </p>

          <h3>Key Statistics</h3>
          <ul>
            <li>18 premium .AI domains</li>
            <li>6 thematic categories</li>
            <li>100% namespace control</li>
            <li>$2.5 trillion target market</li>
            <li>Strategic acquisition opportunity</li>
          </ul>

          <h3>Domain Categories</h3>
          <ul>
            <li>Core Category (3 domains)</li>
            <li>Freight Operations (3 domains)</li>
            <li>Fleet Technology (5 domains)</li>
            <li>Logistics Networks (3 domains)</li>
            <li>Business Models (2 domains)</li>
            <li>Market Position (2 domains)</li>
          </ul>

          <h3>Available Assets</h3>
          <ul>
            <li>High-resolution logo and branding assets</li>
            <li>Portfolio overview documents</li>
            <li>Market analysis reports</li>
            <li>Industry trend insights</li>
            <li>Domain valuation data</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Media Contact</h3>
          <p><strong>Email:</strong> ip@anchortrust.co</p>
          <p><strong>Website:</strong> https://autonomoustrucking.ai</p>
          <p><strong>Portfolio:</strong> Complete domain portfolio available for review</p>
          <p><strong>Interviews:</strong> Available for industry analysis and commentary</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    </>
  );
}
