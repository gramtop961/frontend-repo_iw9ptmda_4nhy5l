import React from 'react'
import { Menu, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
]

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0099FF] via-[#00D9FF] to-[#FF6B35] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-slate-900 font-semibold shadow-[0_0_0_0_rgba(249,168,37,0.6)] hover:shadow-[0_0_20px_6px_rgba(249,168,37,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Get Proposal
            <ArrowRight size={16} />
          </a>
          <button className="md:hidden inline-flex p-2 rounded-full border border-slate-300 text-primary">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
