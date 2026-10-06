import React, { useEffect, useMemo, useState } from 'react'

const projects = [
  { title:'Portfolio System', number:'01', category:'Web Apps', year:'2025', description:'A responsive portfolio system focused on strong storytelling, thoughtful interaction, and a polished experience across devices.', tags:['React','Vite','Tailwind CSS'], repo:'https://github.com/Sameer-959/portfolio', tone:'mint' },
  { title:'Scrimba Question', number:'02', category:'Python', year:'2025', description:'A focused Python challenge demonstrating practical problem solving, readable code, and careful implementation.', tags:['Python','Problem Solving'], repo:'https://github.com/Sameer-959/Scrimba-Question', tone:'lilac' },
  { title:'PetConnect', number:'03', category:'Collaborations', year:'Team project', description:'A social platform for pet owners, shaped around community, animal care, and a friendly end-to-end experience.', tags:['Full Stack','Social Product','Teamwork'], repo:'https://github.com/iam-hassan/PetConnect', tone:'peach' },
  { title:'Ani-Track', number:'04', category:'Collaborations', year:'Team project', description:'An anime discovery and tracking platform with personal lists, social features, and community engagement.', tags:['Product','Community','Teamwork'], repo:'https://github.com/Kenji-x-S/Ani-Track', tone:'blue' }
]

const toolbox = [
  { label:'Interfaces', text:'Responsive, accessible experiences with clear hierarchy and meaningful motion.', tools:['React','JavaScript','Tailwind','Vite'] },
  { label:'Systems', text:'Maintainable services and APIs with dependable data flow and sensible architecture.', tools:['Node.js','Express','MongoDB','REST'] },
  { label:'Delivery', text:'Ownership from planning and prototyping through testing, iteration, and deployment.', tools:['Git','Vercel','Product thinking','Collaboration'] }
]

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function Hero(){
  const [filter,setFilter]=useState('All')
  const [openTool,setOpenTool]=useState(0)
  const filtered=useMemo(()=>filter==='All'?projects:projects.filter(p=>p.category===filter),[filter])

  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px'})
    document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el))
    return()=>observer.disconnect()
  },[])

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
        <div className="section-title" data-reveal><h2>A growing archive of things I’ve built.</h2><p>New, more ambitious projects will be added here as they ship.</p></div>
        <div className="project-controls" data-reveal role="group" aria-label="Filter projects">{['All','Web Apps','Python','Collaborations'].map(item=><button key={item} type="button" onClick={()=>setFilter(item)} className={filter===item?'active':''} aria-pressed={filter===item}>{item}<span>{item==='All'?projects.length:projects.filter(p=>p.category===item).length}</span></button>)}</div>
        <div className="project-canvas">{filtered.map((project,index)=><ProjectCard key={project.title} project={project} index={index}/>)}</div>
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

function ProjectCard({project,index}){
  return <article className={`project-tile tone-${project.tone}`} style={{'--delay':`${index*70}ms`}} data-reveal>
    <div className="tile-head"><span>{project.number}</span><span>{project.category}</span><span>{project.year}</span></div>
    <div className="tile-visual" aria-hidden="true"><div/><i/><b>{project.title.slice(0,2).toUpperCase()}</b></div>
    <div className="tile-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tile-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>View repository <Arrow/></a>
  </article>
}
