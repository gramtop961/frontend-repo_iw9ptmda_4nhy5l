import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  { company: 'Ecom Brand', stat: '+182% organic', detail: '12-month growth', avatar: '🛍️', color: '#00D9FF' },
  { company: 'SaaS Suite', stat: '+64% CTR', detail: 'Ad creative revamp', avatar: '💻', color: '#FF6B35' },
  { company: 'Local Network', stat: '+210% visibility', detail: 'Maps + GBP', avatar: '📍', color: '#0099FF' },
  { company: 'FinTech', stat: '+37% conv.', detail: 'Landing experimentation', avatar: '💳', color: '#6AD7EA' },
]

const CaseStudies = () => {
  return (
    <section id="cases" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-[0.02em]">Success Stories</h2>
            <p className="text-neutral mt-3">Signals that matter: traffic, revenue, visibility, CTR, conversions.</p>
          </div>
          <div className="text-sm text-slate-500">Swipe or hover</div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-[#0a0f1a] text-white overflow-hidden"
            >
              <div className="absolute inset-0 opacity-40" style={{
                background: `radial-gradient(circle at 30% 20%, ${c.color}33 0%, transparent 60%)`
              }} />
              <div className="relative z-10">
                <div className="text-4xl">{c.avatar}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-wide">{c.company}</h3>
                <p className="mt-1 text-secondary font-semibold">{c.stat}</p>
                <p className="mt-4 text-slate-300">{c.detail}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0099FF] via-[#00D9FF] to-[#FF6B35]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
