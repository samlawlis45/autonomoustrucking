"use client";

import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      title: "The Strategic Value of Autonomous Trucking Domains",
      excerpt: "Why owning the autonomous trucking namespace is crucial for industry leaders",
      slug: "strategic-value-autonomous-trucking-domains",
      date: "2024-12-13"
    },
    {
      title: "Hub-to-Hub Logistics: The Future of Autonomous Freight",
      excerpt: "How hub-to-hub operations will transform the logistics industry",
      slug: "hub-to-hub-logistics-future-autonomous-freight",
      date: "2024-12-13"
    },
    {
      title: "Domain Portfolio Strategy for Emerging Technologies",
      excerpt: "Best practices for acquiring and managing tech domain portfolios",
      slug: "domain-portfolio-strategy-emerging-technologies",
      date: "2024-12-13"
    },
    {
      title: "The $2.5 Trillion Autonomous Freight Market Opportunity",
      excerpt: "Market analysis and investment opportunities in autonomous trucking",
      slug: "autonomous-freight-market-opportunity",
      date: "2024-12-13"
    }
  ];

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

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 80px;
        }

        .article-card {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .article-card:hover {
          background: #2A2A2A;
          border-color: #FF4B1F;
        }

        .article-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #FFFFFF;
        }

        .article-excerpt {
          color: #9B9B9B;
          margin-bottom: 16px;
        }

        .article-date {
          font-size: 12px;
          color: #6B6B6B;
          text-transform: uppercase;
          letter-spacing: 1px;
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
          <h1>Autonomous Trucking Insights</h1>
          <p>
            Expert analysis on the autonomous trucking industry, domain strategy, 
            and market opportunities in the $2.5 trillion freight market.
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.slug} className="article-card">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-date">{article.date}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    </>
  );
}
