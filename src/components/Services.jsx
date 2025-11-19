import React from 'react'
import { Search, LineChart, Globe2, Code2, MapPin, ShoppingCart } from 'lucide-react'

const services = [
  { title: 'SEO & Content', icon: Search, desc: 'Technical SEO, content architecture, topical authority.' },
  { title: 'Google Ads & Paid Media', icon: LineChart, desc: 'Full-funnel performance and creative testing.' },
  { title: 'Website Development (AI + No Code)', icon: Code2, desc: 'High-speed AI sites with no-code agility.' },
  { title: 'Analytics & Tracking', icon: Globe2, desc: 'Server-side tagging, blended attribution, GA4 mastery.' },
  { title: 'Local SEO & GBP', icon: MapPin, desc: 'Dominate maps, reviews, and near-me intent.' },
  { title: 'E-commerce SEO', icon: ShoppingCart, desc: 'Scalable catalogs, PDP optimization, CRO synergy.' },
]

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-[#F5F7FA]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-1 rounded-full bg-gradient-to-r from-[#0099FF]/0 via-[#0099FF]/30 to-[#FF6B35]/0" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-[0.02em] mb-4">What FlamesBlue Does</h2>
        <p className="text-neutral max-w-2xl">A modern growth stack that merges SEO, paid media, content, analytics, and AI websites into one engine.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl ring-0 ring-cyan-300/0 group-hover:ring-4 group-hover:ring-cyan-300/40 transition-all" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#0099FF]/15 to-[#00D9FF]/10 text-[#0099FF] group-hover:scale-105 transition-transform">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-primary tracking-wide">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#0099FF] font-medium">
                Learn more
                <span className="w-6 h-[2px] bg-gradient-to-r from-[#0099FF] to-[#00D9FF] group-hover:w-10 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
