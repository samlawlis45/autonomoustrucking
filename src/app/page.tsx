"use client";

import React from "react";

/**
 * VOLVO‑STYLE MINIMALIST — autonomoustrucking.ai
 * Calm, spacious, editorial layout. Monochrome with a single navy accent.
 * No gradients, minimal borders, strong typography hierarchy, clear flow.
 */

const CONTACT_EMAIL = "hello@autonomoustrucking.ai"; // TODO
const FORM_ACTION = ""; // Optional form endpoint

const ACCENT = "#0B1F3F"; // deep navy accent reminiscent of Volvo

const groups: { title: string; items: string[] }[] = [
  { title: "Core Category", items: ["autonomoustrucking.ai", "selfdrivingtrucks.ai", "driverlesstrucking.ai"] },
  { title: "Demand Capture", items: ["selfdrivingfreight.ai", "driverlessfreight.ai", "autonomoustruck.ai"] },
  { title: "Platform / Control", items: ["autonomystack.ai", "fleetobservability.ai", "fleetswarm.ai", "remoteoperations.ai", "efficientfleets.ai"] },
  { title: "Operations & Lanes", items: ["hubtohub.ai", "autonomouslinehaul.ai", "autonomousmiddlemile.ai"] },
  { title: "Business Model", items: ["autonomousasaservice.ai", "driverasaservice.ai"] },
  { title: "Narrative", items: ["autonomousfuture.ai", "autonomoussolutions.ai"] },
];

function Section({ children, id, tone = "white" as "white" | "muted" }: { children: React.ReactNode; id?: string; tone?: "white" | "muted" }) {
  const bg = tone === "white" ? "bg-white" : "bg-slate-50";
  return (
    <section id={id} className={`${bg} py-16 sm:py-20`}> 
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">{children}</div>
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] tracking-[0.22em] uppercase text-slate-500">{children}</p>;
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
      {items.map((d) => (
        <li key={d} className="font-mono text-[13px] text-slate-800 truncate" title={d}>{d}</li>
      ))}
    </ul>
  );
}

export default function VolvoMinimal() {
  const accentBtn = `inline-flex items-center px-5 py-2.5 text-sm font-medium border border-[${ACCENT}] text-[${ACCENT}] hover:bg-[${ACCENT}] hover:text-white transition`;
  const ghostBtn = `inline-flex items-center px-5 py-2.5 text-sm font-medium text-slate-800 hover:text-slate-900`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">autonomoustrucking.ai</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#portfolio" className="text-slate-700 hover:text-slate-900">Portfolio</a>
            <a href="#why" className="text-slate-700 hover:text-slate-900">Why</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Inquire</a>
          </nav>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white`} style={{backgroundColor: ACCENT}}>Contact</a>
        </div>
      </div>

      {/* Hero */}
      <Section id="top" tone="white">
        <Kicker>Premium .AI Portfolio</Kicker>
        <h1 className="mt-3 text-4xl sm:text-[44px] font-semibold leading-tight tracking-tight">Own the Autonomous Trucking Namespace</h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-700">
          Eighteen exact‑match and brand‑defining domains covering how customers, media, and investors talk about autonomous trucking — consolidated under one flagship for clarity and authority.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href="#portfolio" className={accentBtn}>View Portfolio</a>
          <a href="#contact" className={ghostBtn}>Request Overview</a>
        </div>
      </Section>

      {/* Proof line */}
      <Section tone="muted">
        <div className="flex flex-wrap gap-3">
          {["autonomoustrucking","self‑driving trucks","driverless trucking","hub‑to‑hub","middle mile","remote operations","fleet observability","autonomy stack"].map((t)=> (
            <span key={t} className="text-[12px] rounded-sm border border-slate-200 px-3 py-1 text-slate-700">{t}</span>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" tone="white">
        <h2 className="text-3xl font-semibold tracking-tight">Complete Domain Portfolio</h2>
        <p className="mt-3 max-w-3xl text-slate-700">Organized the way your market speaks: core category, demand capture, platform/control, lanes, business model, and narrative.</p>
        <Divider />
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-end justify-between">
                <h3 className="text-xl font-medium">{g.title}</h3>
                <span className="text-xs text-slate-500">{g.items.length} names</span>
              </div>
              <div className="mt-3">
                <List items={g.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section id="why" tone="muted">
        <h2 className="text-3xl font-semibold tracking-tight">Why This Matters</h2>
        <Divider />
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Kicker>Category Authority</Kicker>
            <p className="mt-2 text-slate-700">Control the language of the space so PR, partners, and prospects land on your narrative.</p>
          </div>
          <div>
            <Kicker>Defensive + Offensive</Kicker>
            <p className="mt-2 text-slate-700">Keep strategic terms out of competitors' hands while consolidating brand signals under one hub.</p>
          </div>
          <div>
            <Kicker>Efficient Acquisition</Kicker>
            <p className="mt-2 text-slate-700">A single purchase replaces years of incremental spend across ads, domains, and SEO.</p>
          </div>
        </div>
      </Section>

      {/* Transfer */}
      <Section tone="white">
        <h2 className="text-3xl font-semibold tracking-tight">Simple Transfer</h2>
        <Divider />
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Agree on scope (full portfolio or curated set) and price.</li>
          <li>Open Escrow.com (or Dan.com) for buyer protection.</li>
          <li>Transfer to your registrar; confirm control.</li>
          <li>Implement 301 redirects to your flagship hub.</li>
        </ol>
      </Section>

      {/* Contact */}
      <Section id="contact" tone="muted">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Inquire About Acquisition</h2>
          <p className="mt-3 text-slate-700">We're speaking with a small set of strategic buyers before broader listing.</p>
          <form method="POST" action={FORM_ACTION || undefined} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-none border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200" />
              <input name="company" placeholder="Company" className="w-full rounded-none border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200" />
            </div>
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-none border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200" />
            <textarea name="message" rows={4} placeholder="Message (optional)" className="w-full rounded-none border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200" />
            <div className="flex items-center gap-4">
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white" style={{backgroundColor: ACCENT}}>Request Overview</button>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-800 hover:text-slate-900">or email us directly</a>
            </div>
          </form>
          <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} autonomoustrucking.ai • Secure transfers via Escrow.com or Dan.com.</p>
        </div>
      </Section>
    </main>
  );
}