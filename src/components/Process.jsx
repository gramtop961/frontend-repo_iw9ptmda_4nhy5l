import React from 'react'

const steps = [
  { title: 'Research', desc: 'We map demand, competitors, and constraints.' },
  { title: 'Strategy', desc: 'We design a growth system that compounds.' },
  { title: 'Build', desc: 'We ship SEO, ads, content, and site changes.' },
  { title: 'Scale', desc: 'We optimize, automate, and expand channels.' },
]

const Process = () => {
  return (
    <section id="process" className="relative py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-[0.02em]">How We Work</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200 group">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-slate-900 bg-accent shadow">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary tracking-wide">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0099FF] via-[#00D9FF] to-[#FF6B35] transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
