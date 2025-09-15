"use client";

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Navbar background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (nav && window.scrollY > 50) {
        (nav as HTMLElement).style.background = 'rgba(0, 0, 0, 0.98)';
      } else if (nav) {
        (nav as HTMLElement).style.background = 'rgba(0, 0, 0, 0.9)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Copy domain functionality
    const handleDomainClick = function(this: HTMLElement) {
      const text = this.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        const originalText = this.textContent;
        this.textContent = 'Copied';
        this.style.background = '#FF4B1F';
        this.style.color = '#FFFFFF';
        setTimeout(() => {
          this.textContent = originalText;
          this.style.background = '';
          this.style.color = '';
        }, 1000);
      });
    };

    document.querySelectorAll('.domain-item').forEach(item => {
      item.addEventListener('click', handleDomainClick);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });

    // Remove loading bar after page load
    window.addEventListener('load', function() {
      setTimeout(() => {
        const loadingBar = document.querySelector('.loading-bar');
        if (loadingBar) {
          (loadingBar as HTMLElement).style.display = 'none';
        }
      }, 2000);
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

        .grid-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: 
            linear-gradient(var(--white) 1px, transparent 1px),
            linear-gradient(90deg, var(--white) 1px, transparent 1px);
          background-size: 100px 100px;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .container-wide {
          max-width: 1400px;
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
          color: var(--text-gray);
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

        .hero {
          padding: 200px 0 120px;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 900px;
        }

        .hero-label {
          display: inline-block;
          padding: 8px 16px;
          background: var(--dark-gray);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-gray);
          margin-bottom: 32px;
        }

        h1 {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 32px;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.5;
          color: var(--text-gray);
          max-width: 600px;
          margin-bottom: 48px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
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

        .stats-bar {
          padding: 80px 0;
          background: var(--off-black);
          border-top: 1px solid var(--border-gray);
          border-bottom: 1px solid var(--border-gray);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -2px;
          margin-bottom: 8px;
          font-variant-numeric: tabular-nums;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-gray);
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
          color: var(--text-gray);
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
          color: var(--text-gray);
          max-width: 600px;
        }

        .portfolio-grid {
          display: grid;
          gap: 2px;
          background: var(--border-gray);
        }

        .portfolio-category {
          background: var(--black);
          padding: 48px;
          position: relative;
          transition: background 0.3s ease;
        }

        .portfolio-category:hover {
          background: var(--off-black);
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .category-title {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        .category-count {
          padding: 6px 12px;
          background: var(--dark-gray);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-gray);
        }

        .domain-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .domain-item {
          padding: 16px 20px;
          background: var(--dark-gray);
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
          font-size: 14px;
          color: var(--text-gray);
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .domain-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .domain-item:hover {
          background: var(--medium-gray);
          color: var(--white);
          padding-left: 28px;
        }

        .domain-item:hover::before {
          transform: scaleY(1);
        }

        .visual-section {
          padding: 120px 0;
          background: var(--off-black);
          position: relative;
          overflow: hidden;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: center;
        }

        .visual-content h2 {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 700;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }

        .visual-content p {
          font-size: 18px;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .visual-graphic {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .network-visualization {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .network-line {
          position: absolute;
          height: 1px;
          background: var(--border-gray);
          width: 80%;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
        }

        .network-node {
          position: absolute;
          width: 120px;
          height: 120px;
          background: var(--dark-gray);
          border: 1px solid var(--border-gray);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }

        .network-node:hover {
          background: var(--medium-gray);
          border-color: var(--accent);
          transform: translateY(-50%) scale(1.1);
        }

        .network-node:nth-child(2) { left: 0; }
        .network-node:nth-child(3) { left: 40%; }
        .network-node:nth-child(4) { right: 0; }

        .node-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 4px;
        }

        .node-sublabel {
          font-size: 11px;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 48px;
          margin-top: 80px;
        }

        .feature {
          padding: 48px 0;
          border-top: 1px solid var(--border-gray);
        }

        .feature-number {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .feature-description {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .cta-section {
          padding: 120px 0;
          background: var(--off-black);
          text-align: center;
          border-top: 1px solid var(--border-gray);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .cta-description {
          font-size: 20px;
          color: var(--text-gray);
          margin-bottom: 48px;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        footer {
          padding: 80px 0 40px;
          background: var(--black);
          border-top: 1px solid var(--border-gray);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 80px;
          margin-bottom: 80px;
        }

        .footer-brand h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .footer-brand p {
          color: var(--text-gray);
          font-size: 14px;
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-column h4 {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-gray);
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: var(--white);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--text-gray);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-copyright {
          font-size: 12px;
          color: var(--text-gray);
        }

        .footer-legal {
          display: flex;
          gap: 24px;
          list-style: none;
        }

        .footer-legal a {
          font-size: 12px;
          color: var(--text-gray);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal a:hover {
          color: var(--white);
        }

        .loading-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: var(--accent);
          width: 0;
          z-index: 9999;
          animation: loading 2s ease forwards;
        }

        @keyframes loading {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          h1 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .hero {
            padding: 140px 0 80px;
            min-height: auto;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .portfolio-category {
            padding: 32px 24px;
          }

          .domain-list {
            grid-template-columns: 1fr;
          }

          .visual-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .visual-graphic {
            height: 300px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="loading-bar"></div>
      <div className="grid-pattern"></div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">autonomoustrucking.ai</a>
          <ul className="nav-menu">
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#network" className="nav-link">Network</a></li>
            <li><a href="#advantages" className="nav-link">Advantages</a></li>
            <li><a href="/blog" className="nav-link">Insights</a></li>
            <li><a href="/press" className="nav-link">Press</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
          <a href="/contact" className="nav-cta">Inquire</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" itemScope itemType="https://schema.org/WebPage">
        <div className="container">
          <div className="hero-content">
            <div className="hero-label fade-in">Premium Domain Portfolio</div>
            <h1 className="fade-in delay-1" itemProp="headline">Own the autonomous trucking namespace.</h1>
            <p className="hero-description fade-in delay-2" itemProp="description">
              18 category-defining domains that control how the world discovers, discusses, and 
              transacts in the $2.5 trillion autonomous freight market.
            </p>
            <div className="hero-actions fade-in delay-3">
              <a href="#portfolio" className="btn btn-primary" aria-label="View the complete domain portfolio">View Portfolio</a>
              <a href="#contact" className="btn btn-secondary" aria-label="Request detailed information about acquisition">Request Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container-wide">
          <div className="stats-grid">
            <div className="stat fade-in">
              <div className="stat-value">18</div>
              <div className="stat-label">Premium Domains</div>
            </div>
            <div className="stat fade-in delay-1">
              <div className="stat-value">6</div>
              <div className="stat-label">Market Categories</div>
            </div>
            <div className="stat fade-in delay-2">
              <div className="stat-value">100%</div>
              <div className="stat-label">Namespace Control</div>
            </div>
            <div className="stat fade-in delay-3">
              <div className="stat-value">$2.5T</div>
              <div className="stat-label">Target Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section" itemScope itemType="https://schema.org/ItemList">
        <div className="container-wide">
          <div className="section-header">
            <div className="section-label">Domain Architecture</div>
            <h2 className="section-title" itemProp="name">Strategic namespace control</h2>
            <p className="section-description" itemProp="description">
              Each domain represents a critical entry point in the autonomous trucking ecosystem, 
              from core technology to operational deployment.
            </p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Core Category</h3>
                <span className="category-count">3 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item">autonomoustrucking.ai</div>
                <div className="domain-item">selfdrivingtrucks.ai</div>
                <div className="domain-item">driverlesstrucking.ai</div>
              </div>
            </div>

            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Freight Operations</h3>
                <span className="category-count">3 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item">selfdrivingfreight.ai</div>
                <div className="domain-item">driverlessfreight.ai</div>
                <div className="domain-item">autonomoustruck.ai</div>
              </div>
            </div>

            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Fleet Technology</h3>
                <span className="category-count">5 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item" onClick={() => window.open('/autonomystack', '_blank')}>autonomystack.ai</div>
                <div className="domain-item">fleetobservability.ai</div>
                <div className="domain-item">fleetswarm.ai</div>
                <div className="domain-item">remoteoperations.ai</div>
                <div className="domain-item">efficientfleets.ai</div>
              </div>
            </div>

            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Logistics Networks</h3>
                <span className="category-count">3 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item" onClick={() => window.open('/hubtohub', '_blank')}>hubtohub.ai</div>
                <div className="domain-item">autonomouslinehaul.ai</div>
                <div className="domain-item">autonomousmiddlemile.ai</div>
              </div>
            </div>

            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Business Models</h3>
                <span className="category-count">2 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item">autonomousasaservice.ai</div>
                <div className="domain-item">driverasaservice.ai</div>
              </div>
            </div>

            <div className="portfolio-category">
              <div className="category-header">
                <h3 className="category-title">Market Position</h3>
                <span className="category-count">2 domains</span>
              </div>
              <div className="domain-list">
                <div className="domain-item">autonomousfuture.ai</div>
                <div className="domain-item">autonomoussolutions.ai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Visualization */}
      <section id="network" className="visual-section">
        <div className="container-wide">
          <div className="visual-grid">
            <div className="visual-content">
              <h2>Control the supply chain narrative</h2>
              <p>
                From manufacturer to final mile, these domains map to every critical 
                touchpoint in autonomous logistics.
              </p>
              <p>
                Own the language your customers use. Control the terms your 
                competitors want. Define the category before others can.
              </p>
              <p>
                Each domain is a strategic asset that compounds in value as the 
                autonomous trucking market matures from pilot to production.
              </p>
            </div>
            <div className="visual-graphic">
              <div className="network-visualization">
                <div className="network-line"></div>
                <div className="network-node">
                  <div className="node-label">Origin</div>
                  <div className="node-sublabel">Manufacturing</div>
                </div>
                <div className="network-node">
                  <div className="node-label">Transit</div>
                  <div className="node-sublabel">Autonomous</div>
                </div>
                <div className="network-node">
                  <div className="node-label">Terminal</div>
                  <div className="node-sublabel">Distribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Strategic Value</div>
            <h2 className="section-title">Why this portfolio matters</h2>
          </div>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Category Authority</h3>
              <p className="feature-description">
                Control the primary discovery channels for autonomous trucking. 
                Every search, every discussion, every investment thesis flows through 
                these exact-match domains.
              </p>
            </div>

            <div className="feature">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Competitive Moat</h3>
              <p className="feature-description">
                Deny competitors critical digital real estate. Force them into 
                secondary positions while you own the category-defining namespace.
              </p>
            </div>

            <div className="feature">
              <div className="feature-number">03</div>
              <h3 className="feature-title">Network Effects</h3>
              <p className="feature-description">
                18 interconnected domains create compounding value. Cross-link for SEO 
                dominance, deploy as landing pages, or redirect to consolidate authority.
              </p>
            </div>

            <div className="feature">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Organic Acquisition</h3>
              <p className="feature-description">
                Replace millions in paid search with organic traffic. These domains 
                rank instantly for high-intent commercial queries.
              </p>
            </div>

            <div className="feature">
              <div className="feature-number">05</div>
              <h3 className="feature-title">Brand Flexibility</h3>
              <p className="feature-description">
                Launch sub-brands, test positioning, or create dedicated campaigns. 
                Maximum strategic optionality as the market evolves.
              </p>
            </div>

            <div className="feature">
              <div className="feature-number">06</div>
              <h3 className="feature-title">Asset Appreciation</h3>
              <p className="feature-description">
                .AI domains are appreciating 40% annually. This portfolio becomes 
                exponentially more valuable as autonomous trucking scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Secure your competitive advantage</h2>
            <p className="cta-description">
              Limited acquisition window. Speaking with strategic buyers before broader market listing.
            </p>
            <div className="cta-actions">
              <a href="mailto:ip@anchortrust.co?subject=Autonomous trucking portfolio acquisition" className="btn btn-primary">Request Portfolio Details</a>
              <a href="mailto:ip@anchortrust.co" className="btn btn-secondary">Schedule Discussion</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container-wide">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>autonomoustrucking.ai</h3>
              <p>Premium domain portfolio for the autonomous freight revolution.</p>
            </div>
            <div className="footer-column">
              <h4>Portfolio</h4>
              <ul className="footer-links">
                <li><a href="#portfolio">View Domains</a></li>
                <li><a href="#network">Network Map</a></li>
                <li><a href="#advantages">Strategic Value</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Acquisition</h4>
              <ul className="footer-links">
                <li><a href="#contact">Contact</a></li>
                <li><a href="mailto:ip@anchortrust.co">Email Inquiry</a></li>
                <li><a href="#">Transfer Process</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2024 AutonomousTrucking.ai. All rights reserved.
            </div>
            <ul className="footer-legal">
              <li><a href="#">Escrow.com Verified</a></li>
              <li><a href="#">Transfer Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}