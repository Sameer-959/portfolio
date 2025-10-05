import React from 'react'

export default function PersistentBar(){
  return (
    <div className="persistent-bar fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bar-items flex flex-row items-center gap-2">
        <a href="#" className="bar-item" title="Home" aria-label="Home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill="currentColor"/></svg>
          <span className="label">Home</span>
        </a>

        <a href="#blog" className="bar-item" title="Blog" aria-label="Blog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h14a1 1 0 0 1 1 1v15l-5-2-5 2-5-2V4a1 1 0 0 1 1-1zM6 6h8v2H6V6z"/></svg>
          <span className="label">Blog</span>
        </a>

        <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="bar-item" title="X (Twitter)" aria-label="X">
          {/* official-style X: rounded stroke */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.5 5.5L18.5 18.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 18.5L18.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="label">X</span>
        </a>

        <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="bar-item" title="LinkedIn" aria-label="LinkedIn">
          {/* LinkedIn logo */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.77v2.2h.07c.66-1.25 2.28-2.57 4.69-2.57C22.06 7.63 24 9.92 24 14.18V24h-5v-8.06c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.1-3.09 4.26V24H7.5V8z"/></svg>
          <span className="label">LinkedIn</span>
        </a>

        <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="bar-item" title="GitHub" aria-label="GitHub">
          {/* GitHub octocat */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
          <span className="label">GitHub</span>
        </a>

        <button aria-label="Back to top" className="bar-item goto-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l-8 8h5v8h6v-8h5l-8-8z"/></svg>
          <span className="label">Back to top</span>
        </button>
      </div>
    </div>
  )
}
