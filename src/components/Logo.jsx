import React from 'react'

const Logo = ({ size = 36 }) => {
  return (
    <div className="flex items-center gap-3" aria-label="FlamesBlue logo">
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="fb-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0099FF"/>
              <stop offset="60%" stopColor="#00D9FF"/>
              <stop offset="100%" stopColor="#FF6B35"/>
            </linearGradient>
          </defs>
          <path d="M32 6c8 8 12 14 12 20 0 6-4 10-9 12 3-6-2-9-5-12-3 5-5 9-5 14 0 8 6 18 17 20-19 3-35-11-35-28C7 20 18 9 32 6z" fill="url(#fb-grad)"/>
        </svg>
      </div>
      <span className="font-poppins font-bold tracking-[0.03em] text-primary text-lg">
        FlamesBlue
      </span>
    </div>
  )
}

export default Logo
