import React, { useState } from 'react'

const toolbox = [
  { label:'Interfaces', text:'Responsive, accessible experiences with clear hierarchy and meaningful motion.', tools:['React','JavaScript','Tailwind','Vite'] },
  { label:'Systems', text:'Maintainable services and APIs with dependable data flow and sensible architecture.', tools:['Node.js','Express','MongoDB','REST'] },
  { label:'Delivery', text:'Ownership from planning and prototyping through testing, iteration, and deployment.', tools:['Git','Vercel','Product thinking','Collaboration'] }
]

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function Hero(){
  const [openTool,setOpenTool]=useState(0)

  return <main>
    <section id="home" className="workspace hero-workspace">
      <aside className="hero-rail" data-reveal><span className="rail-mark">SA/</span><span>Independent developer</span><i/><span>Available for meaningful work</span></aside>
      <div className="hero-main" data-reveal style={{'--delay':'70ms'}}>
        <p className="mono-label">Hello — I’m Sameer Aamir</p>
        <h1>Digital products,<br/><em>carefully engineered.</em></h1>
        <p className="hero-lede">I turn rough ideas into useful, responsive software—combining product thinking, clean interfaces, and dependable engineering.</p>
        <div className="hero-actions"><a href="#projects" className="action primary">Browse selected work <Arrow/></a><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="action text-action">Start a conversation ↗</a></div>
      </div>
      <div className="identity-panel" data-reveal style={{'--delay':'150ms'}}>
        <div className="portrait-window"><img src="/assets/profile-avatar.png" alt="Sameer Aamir"/><span>01</span></div>
        <div className="identity-caption"><strong>Builder across the stack</strong><span>Web · Backend · Product</span></div>
      </div>
      <div className="signal-strip" data-reveal><span>Currently exploring</span><div className="signal-track"><b>Interactive interfaces</b><i/> <b>Useful software</b><i/> <b>Thoughtful systems</b><i/> <b>Fast delivery</b></div></div>
    </section>

    <section id="about" className="workspace about-workspace section-space">
      <div className="section-index" data-reveal><span>01</span><p>How I work</p></div>
      <div className="about-copy" data-reveal><h2>Good software starts with understanding the real problem.</h2><div className="about-columns"><p>I build complete digital experiences—from the first rough idea to a responsive interface, practical backend, and reliable deployment.</p><p>I bring clear communication, fast iteration, and an ownership mindset. The goal is not just code. It is a product that feels simple, useful, and built to last.</p></div>
        <div className="proof-note"><img src="/assets/arbisoft.png" alt="Arbisoft logo"/><div><span>Industry experience</span><strong>Arbisoft · Engineering workflows and collaboration</strong></div><b>2025</b></div>
      </div>
    </section>

    <section id="projects" className="workspace projects-workspace section-space">
      <div className="section-index" data-reveal><span>02</span><p>Selected work</p></div>
      <div className="projects-main">
        <div className="section-title" data-reveal><h2>New work is on the way.</h2><p>This archive is being rebuilt around stronger, original projects.</p></div>
        <div className="project-empty" data-reveal>
          <div className="empty-visual" aria-hidden="true"><span>01</span><i/><b>Next<br/>build</b></div>
          <div className="empty-copy"><p className="mono-label">Project space reserved</p><h3>The next projects will earn their place here.</h3><p>I’m clearing out older work and building a more focused collection. New case studies will be added with the problem, process, technology, and result—not just a repository link.</p><a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer">Follow progress on GitHub <Arrow/></a></div>
        </div>
      </div>
    </section>

    <section id="capabilities" className="workspace toolbox-workspace section-space">
      <div className="section-index" data-reveal><span>03</span><p>Toolbox</p></div>
      <div className="toolbox-main">
        <div className="section-title" data-reveal><h2>Flexible by design.<br/>Focused on outcomes.</h2><p>I work across layers and choose tools around the problem, not the other way around.</p></div>
        <div className="tool-accordion">{toolbox.map((item,index)=><article key={item.label} className={openTool===index?'open':''} data-reveal><button type="button" onClick={()=>setOpenTool(openTool===index?-1:index)} aria-expanded={openTool===index}><span>0{index+1}</span><strong>{item.label}</strong><i>{openTool===index?'−':'+'}</i></button><div className="tool-detail"><p>{item.text}</p><div>{item.tools.map(tool=><span key={tool}>{tool}</span>)}</div></div></article>)}</div>
      </div>
    </section>

    <section id="contact" className="workspace contact-workspace section-space" data-reveal>
      <div><p className="mono-label">Have something in mind?</p><h2>Let’s make it real.</h2></div>
      <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="contact-orbit"><span>Start a conversation</span><Arrow/></a>
    </section>

    <footer className="workspace footer"><span>Sameer Aamir · {new Date().getFullYear()}</span><span>Designed and built from scratch.</span></footer>
  </main>
}
