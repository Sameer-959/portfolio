import React, { useEffect } from 'react'

const projects = [
  { title: 'Portfolio', date: '2025 — Present', description: 'A responsive personal portfolio focused on strong storytelling, thoughtful interactions, and a polished experience across devices.', tags: ['React', 'Vite', 'Tailwind CSS'], repo: 'https://github.com/Sameer-959/portfolio', category: 'Web App' },
  { title: 'Internship 2025', date: '2025', description: 'A collection of production-minded engineering work covering data workflows, backend integration, experimentation, and performance.', tags: ['Python', 'Node.js', 'APIs'], repo: 'https://github.com/Sameer-959/internship-2025', category: 'Engineering' },
  { title: 'Scrimba Question', date: '2025', description: 'A focused Python challenge project demonstrating practical problem solving, readable code, and careful implementation.', tags: ['Python', 'Problem Solving'], repo: 'https://github.com/Sameer-959/Scrimba-Question', category: 'Python' },
  { title: 'PetConnect', date: 'Collaborative Project', description: 'A social platform for pet owners, built around community, animal care, and a friendly end-to-end product experience.', tags: ['Full Stack', 'Social Platform', 'Teamwork'], repo: 'https://github.com/iam-hassan/PetConnect', category: 'Web App' },
  { title: 'Ani-Track', date: 'Collaborative Project', description: 'An anime discovery and tracking platform with personal lists, social features, and community engagement.', tags: ['Product', 'Community', 'Teamwork'], repo: 'https://github.com/Kenji-x-S/Ani-Track', category: 'Web App' }
]

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-2.99 0 0 .95-.3 3.11 1.16a10.85 10.85 0 0 1 5.67 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.53.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.32-2.68 5.29-5.23 5.57.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -35px' })
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-main">
      <section id="home" className="intro content-width" data-reveal>
        <div className="intro-line"><div className="mini-avatar"><img src="/assets/profile-avatar.png" alt="Sameer Aamir"/></div><strong>Hi, I’m Sameer <span className="wave">👋</span></strong></div>
        <p className="intro-proof">I design and build useful digital products with clean interfaces, dependable code, and a sharp focus on the people using them.</p>
        <h1>I build <span>web apps</span> and tools that turn ideas into products people enjoy using.</h1>
        <div className="primary-actions"><a href="#projects" className="soft-button">See Projects <ArrowIcon/></a><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="soft-button">Let’s Connect</a></div>
      </section>

      <section id="about" className="content-width story-section">
        <h2 data-reveal>Why should you work with me?</h2>
        <div className="story-grid">
          <div data-reveal><p>I build complete digital experiences—from a clear first idea to a responsive interface, practical backend, and reliable deployment. I care about the details that make software feel simple and trustworthy.</p><p>When I join a project, I bring thoughtful communication, fast iteration, and an ownership mindset. The goal is never just to write code; it is to ship something useful, maintainable, and genuinely pleasant to use.</p></div>
          <div className="portrait-stamp" data-reveal style={{'--delay':'100ms'}}><img src="/assets/profile-avatar.png" alt="Portrait of Sameer Aamir"/><span>SA</span></div>
        </div>
      </section>

      <section id="experience" className="content-width section-block">
        <p className="section-label" data-reveal>Experience</p>
        <h2 data-reveal>Work that shaped how I build</h2>
        <article className="work-card" data-reveal>
          <img src="/assets/arbisoft.png" alt="Arbisoft logo"/>
          <div><div className="work-title"><h3>Engineering Intern at Arbisoft</h3><span>2025</span></div><p>Worked on practical engineering workflows, backend integrations, repeatable experimentation, performance, and clear technical collaboration.</p><div className="chip-row"><span>Python</span><span>Backend</span><span>Data Workflows</span><span>Collaboration</span></div></div>
        </article>
      </section>

      <section id="projects" className="content-width section-block">
        <p className="section-label" data-reveal>My Projects</p>
        <h2 data-reveal>Check out my latest work</h2>
        <p className="section-copy" data-reveal>I’ve worked across web products, backend systems, and collaborative applications. Here are the projects that best represent how I think and build.</p>
        <div className="filter-row" data-reveal><span className="active">All</span><span>Web Apps</span><span>Engineering</span><span>Python</span></div>
        <div className="project-list">{projects.map((project,index)=><Project key={project.title} {...project} index={index}/>)}</div>
      </section>

      <section id="capabilities" className="content-width section-block">
        <p className="section-label" data-reveal>Capabilities</p>
        <h2 data-reveal>What I bring to a project</h2>
        <div className="capability-grid">
          <article data-reveal><span>01</span><h3>Frontend Development</h3><p>Responsive, accessible interfaces with clear hierarchy, polished interaction, and strong performance.</p><div className="chip-row"><span>React</span><span>JavaScript</span><span>Tailwind</span><span>Vite</span></div></article>
          <article data-reveal style={{'--delay':'90ms'}}><span>02</span><h3>Backend Development</h3><p>Practical APIs and services designed around maintainability, clear data flow, and reliable behavior.</p><div className="chip-row"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>REST APIs</span></div></article>
          <article data-reveal style={{'--delay':'180ms'}}><span>03</span><h3>Product Engineering</h3><p>From understanding the real problem to planning, building, testing, and shipping the finished product.</p><div className="chip-row"><span>Git</span><span>Deployment</span><span>UX Thinking</span><span>Teamwork</span></div></article>
        </div>
      </section>

      <section id="contact" className="content-width contact-block" data-reveal>
        <p className="section-label">Contact</p><h2>Let’s build something worth shipping.</h2><p>Have a project, an opportunity, or a question? Send me a message on LinkedIn and I’ll get back to you.</p>
        <div className="primary-actions"><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="dark-button">Message me <ArrowIcon/></a><a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="soft-button"><GithubIcon/> GitHub</a></div>
      </section>

      <footer className="content-width footer"><span>© {new Date().getFullYear()} Sameer Aamir</span><span>Built with care.</span></footer>
    </main>
  )
}

function Project({title,date,description,tags,repo,category,index}) {
  return <article className="project-row" data-reveal style={{'--delay':`${Math.min(index*70,210)}ms`}}><div className="project-number">0{index+1}</div><div className="project-body"><div className="project-heading"><div><span>{category}</span><h3>{title}</h3></div><time>{date}</time></div><p>{description}</p><div className="chip-row">{tags.map(tag=><span key={tag}>{tag}</span>)}</div><a href={repo} target="_blank" rel="noreferrer">View Project <ArrowIcon/></a></div></article>
}
