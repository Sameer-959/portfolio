import React, { useRef, useState } from 'react'

export default function PersistentBar(){
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [scaleX, setScaleX] = useState(1)

  function onMouseMove(e){
    const el = containerRef.current
    if(!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    const dist = Math.min(1, Math.hypot(dx, dy))
    const s = 1 + 0.05 * (1 - dist)
    const hx = Math.min(1, Math.abs(dx))
    const sx = 1 + 0.10 * (1 - hx)
    setScale(s)
    setScaleX(sx)
  }
  function onMouseLeave(){ setScale(1); setScaleX(1) }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="flex items-center gap-2 rounded-full bg-neutral-900/70 text-white/90 shadow-lg ring-1 ring-white/10 backdrop-blur px-2.5 py-1.5"
        style={{ transition: 'transform 160ms ease-out', transform: `scale(${scale}) scaleX(${scaleX})` }}
      >
        <div className="flex items-center gap-2">
          <a href="#" className="bar-item" title="Home" aria-label="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill="currentColor"/></svg>
          </a>

          <a href="#blog" className="bar-item" title="Blog" aria-label="Blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h14a1 1 0 0 1 1 1v15l-5-2-5 2-5-2V4a1 1 0 0 1 1-1zM6 6h8v2H6V6z"/></svg>
          </a>
        </div>

        <div className="h-6 w-px bg-white/15 mx-1" aria-hidden="true" />

        <div className="flex items-center gap-2">
          <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="bar-item" title="GitHub" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="bar-item" title="LinkedIn" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.77v2.2h.07c.66-1.25 2.28-2.57 4.69-2.57C22.06 7.63 24 9.92 24 14.18V24h-5v-8.06c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.1-3.09 4.26V24H7.5V8z"/></svg>
          </a>

          <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="bar-item" title="X (Twitter)" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.244 2H21.7l-7.5 8.57L24 22h-6.8l-5.3-6.9L5 22H1.57l7.9-9.02L0 2h6.96l4.96 6.51L18.244 2z"/></svg>
          </a>
        </div>

        <div className="h-6 w-px bg-white/15 mx-1" aria-hidden="true" />

        <button aria-label="Top" title="Top" className="bar-item goto-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l-8 8h5v8h6v-8h5l-8-8z"/></svg>
        </button>
      </div>
    </div>
  )
}
