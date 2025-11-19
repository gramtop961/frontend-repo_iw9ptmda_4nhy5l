import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#0a0f1a]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[50rem] h-[50rem] rounded-full opacity-40 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.15) 0%, rgba(0,217,255,0.1) 40%, rgba(255,107,53,0.08) 70%, rgba(10,15,26,0) 75%)'
        }} />
        <div className="absolute -bottom-32 right-0 w-[42rem] h-[42rem] rounded-full opacity-30 blur-3xl" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,107,53,0.12) 0%, rgba(0,217,255,0.08) 40%, rgba(10,15,26,0) 70%)'
        }} />
      </div>

      <div className="absolute inset-0/ flex justify-center items-center">
        <div className="w-full h-[70vh] max-h-[720px] opacity-80">
          <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-white">
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] mb-4">AI • Growth • Performance</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[0.03em] leading-tight">
            Growth systems for brands that want the top spot.
          </h1>
          <p className="mt-5 text-neutral/90 text-lg max-w-xl">
            SEO, paid media, content and AI websites engineered as one system. Precise analytics. Faster experiments. Compounding growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-full bg-accent text-slate-900 font-semibold shadow-[0_0_0_0_rgba(249,168,37,0.6)] hover:shadow-[0_0_20px_6px_rgba(249,168,37,0.35)] transition-all duration-300">
              Get Proposal
            </a>
            <a href="#services" className="px-6 py-3 rounded-full border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
        <div className="md:col-span-5" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
