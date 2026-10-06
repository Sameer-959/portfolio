import React, { useEffect, useState } from 'react'

const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-2.99 0 0 .95-.3 3.11 1.16a10.85 10.85 0 0 1 5.67 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.53.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.32-2.68 5.29-5.23 5.57.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>

export default function PersistentBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const close = () => setOpen(false)
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={close}><span>SA</span><strong>Sameer Aamir</strong></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i/><i/></button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}><a href="#experience" onClick={close}>Experience</a><a href="#projects" onClick={close}>Work</a><a href="#skills" onClick={close}>Skills</a><a href="#contact" onClick={close}>Contact</a></div>
        <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="nav-social" aria-label="GitHub"><GithubIcon/></a>
      </nav>
    </header>
  )
}
