import React from 'react'

const WhyChoose = () => {
  return (
    <section id="why" className="relative py-24 bg-[#0a0f1a] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0,153,255,0.15) 0%, rgba(0,217,255,0.12) 35%, rgba(255,107,53,0.10) 60%, rgba(10,15,26,0) 70%)'
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[0.02em]">Why choose FlamesBlue</h2>
            <p className="mt-5 text-slate-300">We combine creative strategy with rigorous data engineering. That means sharper insights, faster decisions, and execution that compounds month over month.</p>
            <ul className="mt-8 space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                Battle-tested playbooks across SEO, paid media, content, and CRO.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                AI website frameworks for speed, scale, and better UX.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#6AD7EA] animate-pulse" />
                Analytics stack that ties actions to revenue, not vanity metrics.
              </li>
            </ul>
          </div>
          <div aria-hidden="true">
            <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[#0099FF]/20 via-[#00D9FF]/10 to-[#FF6B35]/20" />
              <div className="absolute -inset-1 rounded-2xl blur-2xl opacity-50 bg-gradient-to-r from-[#0099FF]/20 via-[#00D9FF]/10 to-[#FF6B35]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
