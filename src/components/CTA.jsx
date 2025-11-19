import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-accent text-slate-900 p-10 md:p-14 shadow-xl">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full blur-2xl opacity-30 bg-[#FF6B35]" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-2xl opacity-30 bg-[#0099FF]" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-[0.02em]">Ready to grow? Let’s build your blueprint.</h2>
              <p className="mt-4 text-slate-800 max-w-xl">Book a strategy call and we’ll map the fastest path to your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#" className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:opacity-90 transition">Book Strategy Call</a>
              <a href="#services" className="px-6 py-3 rounded-full border border-slate-900/30 text-slate-900 font-semibold hover:bg-slate-900/10 transition">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
