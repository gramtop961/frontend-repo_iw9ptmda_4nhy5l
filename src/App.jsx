import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter text-[16px] bg-white text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <WhyChoose />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
