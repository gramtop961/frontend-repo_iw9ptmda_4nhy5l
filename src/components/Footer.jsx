import React from 'react'
import { Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold tracking-wide">FlamesBlue</h3>
          <p className="mt-3 text-neutral/90">SEO, Paid Media, Content, AI Websites, Analytics, Growth Systems.</p>
        </div>
        <nav className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral">Navigate</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#cases" className="hover:text-secondary transition-colors">Case Studies</a></li>
              <li><a href="#why" className="hover:text-secondary transition-colors">Why Us</a></li>
              <li><a href="#process" className="hover:text-secondary transition-colors">Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral">Connect</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Twitter size={18}/></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Linkedin size={18}/></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><Github size={18}/></a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-neutral">© {new Date().getFullYear()} FlamesBlue. All rights reserved.</div>
    </footer>
  )
}

export default Footer
