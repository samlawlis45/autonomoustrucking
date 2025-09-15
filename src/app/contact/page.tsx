import React from "react";

export const metadata = {
  title: "Contact | autonomoustrucking.ai",
  description: "Get in touch about the autonomous trucking domain portfolio.",
};

export default function ContactPage() {
  const CONTACT_EMAIL = "ip@achortrust.co";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">autonomoustrucking.ai</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/" className="text-slate-700 hover:text-slate-900">Home</a>
            <a href="/contact" className="text-slate-900 font-medium">Contact</a>
          </nav>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">Email</a>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-slate-700 max-w-2xl">We\'re engaging a small set of strategic buyers before broader listing. Use the form below or email us directly.</p>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form method="POST" className="grid grid-cols-1 gap-4" action={undefined}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  <input name="company" placeholder="Company" className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <input type="email" name="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                <textarea name="message" rows={5} placeholder="Message" className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">Send</button>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-700 hover:text-slate-900">or email us directly</a>
                </div>
              </form>
              <p className="mt-3 text-xs text-slate-500">Secure transactions via Escrow.com or Dan.com.</p>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-medium">Direct email</h2>
              <p className="mt-2"><a className="text-slate-900 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <div className="mt-6 text-sm text-slate-600">
                <p>We typically respond within 1 business day.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}


