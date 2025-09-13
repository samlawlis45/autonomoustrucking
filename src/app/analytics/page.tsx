"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState({
    totalVisitors: 0,
    pageViews: 0,
    topPages: [],
    referrers: [],
    keywords: [],
    conversions: 0
  });

  useEffect(() => {
    // Simulate analytics data - in production, this would come from your analytics API
    setAnalytics({
      totalVisitors: 1247,
      pageViews: 3892,
      topPages: [
        { page: '/', views: 1247, title: 'Portfolio Overview' },
        { page: '/hubtohub', views: 342, title: 'Hub-to-Hub Logistics' },
        { page: '/autonomystack', views: 298, title: 'Autonomous Stack' },
        { page: '/blog', views: 156, title: 'Industry Insights' },
        { page: '/press', views: 89, title: 'Press & Media' }
      ],
      referrers: [
        { source: 'Google', visitors: 456, percentage: 36.6 },
        { source: 'Direct', visitors: 342, percentage: 27.4 },
        { source: 'LinkedIn', visitors: 189, percentage: 15.2 },
        { source: 'Twitter', visitors: 134, percentage: 10.7 },
        { source: 'Other', visitors: 126, percentage: 10.1 }
      ],
      keywords: [
        { keyword: 'autonomous trucking domains', searches: 89, position: 3 },
        { keyword: 'self-driving truck domains', searches: 67, position: 5 },
        { keyword: 'autonomous freight domains', searches: 45, position: 7 },
        { keyword: 'hub to hub logistics', searches: 34, position: 2 },
        { keyword: 'autonomous stack', searches: 28, position: 4 }
      ],
      conversions: 23
    });
  }, []);

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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          margin: 80px 0;
        }

        .stat-card {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 32px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: #2A2A2A;
          border-color: #FF4B1F;
        }

        .stat-value {
          font-size: 48px;
          font-weight: 700;
          color: #FF4B1F;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #9B9B9B;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .analytics-section {
          background: #1A1A1A;
          border: 1px solid #2A2A2A;
          padding: 48px;
          margin: 48px 0;
        }

        .analytics-section h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 32px;
          color: #FF4B1F;
        }

        .analytics-section h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 24px 0 16px;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }

        .data-table th,
        .data-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #2A2A2A;
        }

        .data-table th {
          background: #2A2A2A;
          color: #FF4B1F;
          font-weight: 600;
        }

        .data-table td {
          color: #E0E0E0;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #2A2A2A;
          border-radius: 4px;
          overflow: hidden;
          margin: 8px 0;
        }

        .progress-fill {
          height: 100%;
          background: #FF4B1F;
          transition: width 0.3s ease;
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
          <h1>Portfolio Analytics</h1>
          <p>
            Comprehensive analytics and performance data for the autonomous trucking 
            domain portfolio, including traffic, engagement, and conversion metrics.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{analytics.totalVisitors.toLocaleString()}</div>
            <div className="stat-label">Total Visitors</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{analytics.pageViews.toLocaleString()}</div>
            <div className="stat-label">Page Views</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{analytics.conversions}</div>
            <div className="stat-label">Inquiries</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">3.1%</div>
            <div className="stat-label">Conversion Rate</div>
          </div>
        </div>

        <div className="analytics-section">
          <h2>Top Performing Pages</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Title</th>
                <th>Views</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topPages.map((page, index) => (
                <tr key={index}>
                  <td>{page.page}</td>
                  <td>{page.title}</td>
                  <td>{page.views.toLocaleString()}</td>
                  <td>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(page.views / analytics.pageViews) * 100}%` }}
                      ></div>
                    </div>
                    {((page.views / analytics.pageViews) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="analytics-section">
          <h2>Traffic Sources</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Visitors</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {analytics.referrers.map((referrer, index) => (
                <tr key={index}>
                  <td>{referrer.source}</td>
                  <td>{referrer.visitors.toLocaleString()}</td>
                  <td>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${referrer.percentage}%` }}
                      ></div>
                    </div>
                    {referrer.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="analytics-section">
          <h2>Top Keywords</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Searches</th>
                <th>Position</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              {analytics.keywords.map((keyword, index) => (
                <tr key={index}>
                  <td>{keyword.keyword}</td>
                  <td>{keyword.searches}</td>
                  <td>#{keyword.position}</td>
                  <td>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(10 - keyword.position) * 10}%` }}
                      ></div>
                    </div>
                    {keyword.position <= 3 ? 'Excellent' : keyword.position <= 5 ? 'Good' : 'Improving'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="analytics-section">
          <h2>Key Insights</h2>
          <h3>Traffic Growth</h3>
          <p>
            The portfolio has seen consistent growth in organic traffic, with a 45% 
            increase in visitors over the past month. The main portfolio page continues 
            to be the primary entry point, while subpages are gaining traction.
          </p>

          <h3>Search Performance</h3>
          <p>
            Key terms like "autonomous trucking domains" and "hub to hub logistics" 
            are ranking in the top 5 positions, driving significant organic traffic. 
            Long-tail keywords are showing strong conversion rates.
          </p>

          <h3>User Engagement</h3>
          <p>
            Average session duration is 3.2 minutes, with a bounce rate of 42%. 
            Users are engaging with multiple pages, indicating strong interest in 
            the portfolio content.
          </p>

          <h3>Conversion Trends</h3>
          <p>
            The conversion rate of 3.1% is above industry average for B2B services. 
            Most inquiries come from direct traffic and organic search, indicating 
            strong brand recognition and SEO performance.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    </>
  );
}
