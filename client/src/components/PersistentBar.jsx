import React from 'react'

const HomeIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-7 8 7v10a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1V10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
const WorkIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v13H4zM9 7V4h6v3M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
const CodeIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-2.99 0 0 .95-.3 3.11 1.16a10.85 10.85 0 0 1 5.67 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.53.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.32-2.68 5.29-5.23 5.57.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>
const LinkedinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.4 7.7H1.8V22h3.6V7.7ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2Zm18.6 11.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.7H9V22h3.6v-7.1c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9v7h3.6l.8-8.2Z"/></svg>

export default function PersistentBar() {
  return <nav className="floating-dock" aria-label="Quick navigation"><a href="#home" data-label="Home"><HomeIcon/></a><a href="#about" data-label="About"><WorkIcon/></a><a href="#projects" data-label="Projects"><CodeIcon/></a><i/><a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" data-label="GitHub"><GithubIcon/></a><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" data-label="LinkedIn"><LinkedinIcon/></a></nav>
}
