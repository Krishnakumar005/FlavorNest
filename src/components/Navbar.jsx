import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.png';

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about']
      let current = 'home'
      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-primary text-secondary p-3 fixed w-full top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="FlavorNest Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold">FlavorNest</span>
        </div>
        <button className="md:hidden block" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`md:flex space-x-6 justify-center items-center md:static absolute left-0 w-full md:w-auto bg-primary md:bg-transparent transition-all duration-300 ease-in-out ${open ? 'top-16' : 'top-[-300px]'} md:top-0 p-4 md:p-0`}>
          <li className="my-2 md:my-0">
            <a
              href="#home"
              className={`${activeSection === 'home' ? 'bg-secondary rounded text-primary px-3 py-1' : 'hover:text-accent transition'}`}
              onClick={e => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#menu"
              className={`${activeSection === 'menu' ? 'bg-secondary rounded text-primary px-3 py-1' : 'hover:text-accent transition'}`}
              onClick={e => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Menu
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#about"
              className={`${activeSection === 'about' ? 'bg-secondary rounded text-primary px-3 py-1' : 'hover:text-accent transition'}`}
              onClick={e => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
