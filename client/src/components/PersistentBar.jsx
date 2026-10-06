import React, { useEffect, useState } from 'react'

const Icon=({children})=><svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
const Home=()=> <Icon><path d="m4 10 8-7 8 7v10a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1V10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></Icon>
const Grid=()=> <Icon><rect x="4" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7"/><rect x="14" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7"/><rect x="4" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7"/><rect x="14" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7"/></Icon>
const Github=()=> <Icon><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-2.99 0 0 .95-.3 3.11 1.16a10.85 10.85 0 0 1 5.67 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.53.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.32-2.68 5.29-5.23 5.57.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></Icon>
const Linkedin=()=> <Icon><path fill="currentColor" d="M5.4 7.7H1.8V22h3.6V7.7ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2Zm18.6 6.1c-2.5 0-3.6 1.4-4.2 2.3V7.7H9V22h3.6v-7.1c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9v7h3.6v-8.2c0-4.3-2.3-6.3-5.4-6.3Z"/></Icon>
const Sun=()=> <Icon><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></Icon>
const Moon=()=> <Icon><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></Icon>

export default function PersistentBar(){
  const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')||'light')
  useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme])
  return <nav className="control-dock" aria-label="Quick navigation"><a href="#home" data-tip="Home"><Home/></a><a href="#projects" data-tip="Projects"><Grid/></a><i/><a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" data-tip="GitHub"><Github/></a><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" data-tip="LinkedIn"><Linkedin/></a><i/><button type="button" onClick={()=>setTheme(theme==='light'?'dark':'light')} data-tip={theme==='light'?'Dark mode':'Light mode'} aria-label={`Switch to ${theme==='light'?'dark':'light'} mode`}>{theme==='light'?<Moon/>:<Sun/>}</button></nav>
}
