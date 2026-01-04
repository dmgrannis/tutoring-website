import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav 
      className="sticky top-0 z-50 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 shadow-lg shadow-blue-900/30 rounded-2xl relative overflow-hidden"
    >

      <div className="w-full h-16 flex items-center relative z-10">
        {/* Left margin - Dillon Grannis centered here */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-xl font-semibold text-white tracking-wide">
            Dillon Grannis
          </Link>
        </div>
        
        {/* Center - matches content width, invisible spacer */}
        <div className="hidden md:block w-full max-w-4xl px-4"></div>
        
        {/* Right margin - buttons centered here */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          <Link 
            href="/" 
            className="relative px-5 py-2 rounded-full font-medium text-white transition-all duration-200 hover:scale-105"
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 15%),
                linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)
              `,
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <span className="relative z-10">Home</span>
          </Link>
          <Link 
            href="/contact" 
            className="relative px-5 py-2 rounded-full font-medium text-white transition-all duration-200 hover:scale-105"
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 15%),
                linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)
              `,
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <span className="relative z-10">Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 mr-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span 
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 relative z-10 ${
          isOpen ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <Link 
          href="/" 
          className="block py-2 my-1 px-5 rounded-full font-medium text-center text-white transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/contact" 
          className="block py-2 my-1 px-5 rounded-full font-medium text-center text-white transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
