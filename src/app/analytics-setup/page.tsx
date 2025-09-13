"use client";

import React from 'react';
import Link from 'next/link';

export default function AnalyticsSetupPage() {
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
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .article {
          padding: 120px 0 80px;
        }

        .article h1 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .article h2 {
          font-size: 28px;
          font-weight: 600;
          margin: 48px 0 24px;
          color: #FF4B1F;
        }

        .article h3 {
          font-size: 22px;
          font-weight: 600;
          margin: 32px 0 16px;
        }

        .article p {
          font-size: 18px;
          color: #E0E0E0;
          margin-bottom: 24px;
        }

        .article ul {
          margin: 24px 0;
          padding-left: 24px;
        }

        .article li {
          font-size: 18px;
          color: #E0E0E0;
          margin-bottom: 12px;
        }

        .article code {
          background: #1A1A1A;
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
          color: #FF4B1F;
        }

        .highlight {
          background: #1A1A1A;
          border-left: 4px solid #FF4B1F;
          padding: 24px;
          margin: 32px 0;
        }

        .back-link {
          display: inline-block;
          margin-top: 48px;
          color: #9B9B9B;
          text-decoration: none;
          font-size: 14px;
        }

        .back-link:hover {
          color: #FFFFFF;
        }

        .cta {
          display: inline-block;
          padding: 14px 32px;
          background: #FF4B1F;
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 600;
          border-radius: 4px;
          margin: 32px 0;
          transition: all 0.2s ease;
        }

        .cta:hover {
          background: #FF6B3F;
        }
      `}</style>

      <div className="container">
        <article className="article">
          <h1>Analytics Setup Guide</h1>
          
          <p>
            This guide will help you set up comprehensive analytics tracking for your 
            autonomous trucking domain portfolio to monitor performance, track conversions, 
            and optimize for better search rankings.
          </p>

          <h2>Google Analytics 4 Setup</h2>
          
          <p>
            Google Analytics 4 provides comprehensive tracking capabilities for your domain portfolio:
          </p>

          <h3>1. Create GA4 Property</h3>
          <ul>
            <li>Go to <a href="https://analytics.google.com" target="_blank" style={{color: '#FF4B1F'}}>analytics.google.com</a></li>
            <li>Create a new property for autonomoustrucking.ai</li>
            <li>Set up data streams for web traffic</li>
            <li>Configure conversion events for inquiries</li>
          </ul>

          <h3>2. Install Tracking Code</h3>
          <p>
            Add the GA4 tracking code to your site. The code should be placed in the 
            <code>&lt;head&gt;</code> section of your layout.tsx file:
          </p>

          <div className="highlight">
            <p>
              <strong>Note:</strong> The tracking code is already included in your layout.tsx 
              file. You just need to replace the placeholder with your actual GA4 measurement ID.
            </p>
          </div>

          <h3>3. Configure Goals and Conversions</h3>
          <ul>
            <li>Set up conversion tracking for email inquiries</li>
            <li>Track page views for each domain subpage</li>
            <li>Monitor user engagement metrics</li>
            <li>Set up custom events for portfolio interactions</li>
          </ul>

          <h2>Search Console Setup</h2>
          
          <p>
            Google Search Console helps you monitor search performance and identify optimization opportunities:
          </p>

          <h3>1. Verify Domain Ownership</h3>
          <ul>
            <li>Add autonomoustrucking.ai to Search Console</li>
            <li>Verify ownership using DNS record or HTML file</li>
            <li>Submit sitemap.xml for better crawling</li>
          </ul>

          <h3>2. Monitor Search Performance</h3>
          <ul>
            <li>Track keyword rankings and impressions</li>
            <li>Monitor click-through rates from search results</li>
            <li>Identify high-performing pages and content</li>
            <li>Track mobile usability and Core Web Vitals</li>
          </ul>

          <h2>Plausible Analytics (Already Configured)</h2>
          
          <p>
            Plausible Analytics is already set up on your site and provides:
          </p>

          <ul>
            <li>Privacy-focused analytics without cookies</li>
            <li>Real-time visitor tracking</li>
            <li>Referrer and keyword analysis</li>
            <li>Goal conversion tracking</li>
          </ul>

          <h2>Custom Event Tracking</h2>
          
          <p>
            Implement custom event tracking to monitor specific user interactions:
          </p>

          <h3>Portfolio Interactions</h3>
          <ul>
            <li>Domain clicks and views</li>
            <li>Subpage navigation</li>
            <li>Email inquiry form submissions</li>
            <li>Download and engagement actions</li>
          </ul>

          <h3>Content Engagement</h3>
          <ul>
            <li>Article reading time and completion</li>
            <li>Blog post interactions</li>
            <li>Press release views</li>
            <li>Analytics page visits</li>
          </ul>

          <h2>Conversion Tracking Setup</h2>
          
          <p>
            Set up conversion tracking to measure the effectiveness of your portfolio:
          </p>

          <h3>Primary Conversions</h3>
          <ul>
            <li>Email inquiries from contact forms</li>
            <li>Portfolio download requests</li>
            <li>Press kit downloads</li>
            <li>Analytics page visits (indicates serious interest)</li>
          </ul>

          <h3>Secondary Conversions</h3>
          <ul>
            <li>Blog post engagement</li>
            <li>Subpage visits</li>
            <li>Time spent on site</li>
            <li>Return visitor rate</li>
          </ul>

          <h2>Reporting and Analysis</h2>
          
          <p>
            Regular analysis of your analytics data will help optimize performance:
          </p>

          <h3>Weekly Reports</h3>
          <ul>
            <li>Traffic volume and sources</li>
            <li>Top performing pages and content</li>
            <li>Conversion rates and inquiry quality</li>
            <li>Search ranking changes</li>
          </ul>

          <h3>Monthly Analysis</h3>
          <ul>
            <li>Content performance trends</li>
            <li>Keyword ranking improvements</li>
            <li>User behavior patterns</li>
            <li>ROI and conversion optimization</li>
          </ul>

          <h2>SEO Monitoring Tools</h2>
          
          <p>
            Additional tools to monitor your search performance:
          </p>

          <h3>Ranking Tools</h3>
          <ul>
            <li>SEMrush or Ahrefs for keyword tracking</li>
            <li>Google Search Console for search performance</li>
            <li>Moz for domain authority monitoring</li>
            <li>Ubersuggest for keyword research</li>
          </ul>

          <h3>Competitive Analysis</h3>
          <ul>
            <li>Monitor competitor domain strategies</li>
            <li>Track industry keyword trends</li>
            <li>Analyze competitor content performance</li>
            <li>Identify new opportunity keywords</li>
          </ul>

          <div className="highlight">
            <p>
              <strong>Pro Tip:</strong> Set up automated reports to track your key metrics 
              weekly. This will help you identify trends and optimization opportunities 
              quickly.
            </p>
          </div>

          <h2>Next Steps</h2>
          
          <p>
            Once your analytics are set up, focus on:
          </p>

          <ul>
            <li>Regular content updates and optimization</li>
            <li>Keyword ranking improvements</li>
            <li>Conversion rate optimization</li>
            <li>User experience enhancements</li>
          </ul>

          <a href="mailto:ip@anchortrust.co?subject=Analytics Setup Support" className="cta">
            Get Analytics Support
          </a>

          <br />
          <Link href="/" className="back-link">← Back to Portfolio</Link>
        </article>
      </div>
    </>
  );
}
