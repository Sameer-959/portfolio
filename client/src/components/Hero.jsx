import React, { useEffect } from 'react'

const projects = [
  { title: 'Portfolio', eyebrow: 'Featured build', description: 'A fast, responsive portfolio built with React, Vite, and Tailwind—designed to turn technical work into a clear professional story.', tags: ['React', 'Vite', 'Tailwind'], repo: 'https://github.com/Sameer-959/portfolio', accent: 'cyan' },
  { title: 'Internship 2025', eyebrow: 'Machine learning', description: 'Applied machine-learning work spanning data preparation, experimentation, evaluation, and production-minded integration.', tags: ['Python', 'TensorFlow', 'Data'], repo: 'https://github.com/Sameer-959/internship-2025', accent: 'violet' },
  { title: 'Scrimba Question', eyebrow: 'Python project', description: 'A focused Python challenge project demonstrating practical problem solving and clean implementation.', tags: ['Python', 'Problem Solving'], repo: 'https://github.com/Sameer-959/Scrimba-Question', accent: 'blue' }
]

const collaborations = [
  { title: 'PetConnect', description: 'A social platform for pet owners combining community features with an AI assistant for animal care.', tags: ['AI', 'Social Platform', 'Full Stack'], repo: 'https://github.com/iam-hassan/PetConnect' },
  { title: 'Ani-Track', description: 'An anime discovery and tracking platform with personal lists, social features, and community engagement.', tags: ['Community', 'Product', 'Collaboration'], repo: 'https://github.com/Kenji-x-S/Ani-Track' }
]

const skillGroups = [
  { title: 'AI & Data', items: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Data Pipelines'] },
  { title: 'Product Engineering', items: ['React', 'JavaScript', 'Node.js', 'Express', 'REST APIs'] },
  { title: 'Tools & Systems', items: ['MongoDB', 'Git', 'C++', 'Vite', 'Deployment'] }
]

const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.58 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.46.11-2.99 0 0 .95-.3 3.11 1.16a10.85 10.85 0 0 1 5.67 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.53.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.32-2.68 5.29-5.23 5.57.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>
const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px' })
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    const handlePointer = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', handlePointer, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('pointermove', handlePointer) }
  }, [])

  return (
    <main>
      <div className="ambient-bg" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/><div className="grid-overlay"/></div>

      <section id="home" className="hero-shell section-shell">
        <div className="hero-copy" data-reveal>
          <div className="availability-pill"><span className="status-dot"/>Open to internships & collaborations</div>
          <p className="hero-kicker">Machine Learning · Full-Stack Engineering</p>
          <h1>I build intelligent products that feel <span>effortless.</span></h1>
          <p className="hero-description">I’m Sameer Aamir, a computer science student and developer crafting thoughtful AI systems, scalable APIs, and polished web experiences from idea to deployment.</p>
          <div className="hero-actions"><a href="#projects" className="button button-primary">Explore my work <ArrowIcon/></a><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="button button-secondary">Let’s connect</a></div>
          <div className="hero-proof" aria-label="Professional highlights"><div><strong>5+</strong><span>Projects shipped</span></div><div><strong>2025</strong><span>ML internship</span></div><div><strong>2027</strong><span>Expected graduation</span></div></div>
        </div>
        <div className="hero-visual" data-reveal style={{ '--delay': '140ms' }}>
          <div className="portrait-halo"/><div className="portrait-card"><div className="portrait-frame"><img src="/assets/profile-avatar.png" alt="Portrait of Sameer Aamir"/></div><div className="portrait-meta"><div><span>Based in</span><strong>Lahore, Pakistan</strong></div><div className="portrait-badge">Available</div></div></div>
          <div className="floating-chip chip-ai">AI / ML</div><div className="floating-chip chip-code">React + Node</div>
        </div>
      </section>

      <div className="tech-marquee" aria-label="Core technologies"><div className="marquee-track">{[...['Python','TensorFlow','React','Node.js','MongoDB','PyTorch'], ...['Python','TensorFlow','React','Node.js','MongoDB','PyTorch']].map((tech,index)=><span key={`${tech}-${index}`}>{tech}<i/></span>)}</div></div>

      <section id="experience" className="section-shell content-section">
        <SectionHeading number="01" eyebrow="Experience" title="Building with real-world constraints" copy="Turning experiments into reliable, understandable systems through careful engineering and collaboration."/>
        <article className="experience-card" data-reveal><div className="company-mark"><img src="/assets/arbisoft.png" alt="Arbisoft logo"/></div><div className="experience-main"><div className="experience-title-row"><div><h3>Machine Learning Intern</h3><p>Arbisoft · Lahore, Pakistan</p></div><span>2025</span></div><div className="experience-grid"><p>Built classification, regression, and embedding workflows using TensorFlow and scikit-learn.</p><p>Designed reproducible preprocessing, feature engineering, evaluation, and reporting pipelines.</p><p>Integrated trained models into Node.js services through clean, performance-aware APIs.</p><p>Collaborated through code reviews, technical documentation, and deployment best practices.</p></div></div></article>
      </section>

      <section id="projects" className="section-shell content-section"><SectionHeading number="02" eyebrow="Selected work" title="Projects with purpose" copy="A selection of products and experiments across web engineering, machine learning, and collaborative development."/><div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.title} {...project} index={index}/>)}</div></section>

      <section className="section-shell content-section collaboration-section"><SectionHeading number="03" eyebrow="Teamwork" title="Built in collaboration" copy="Projects where shared ownership, communication, and product thinking mattered as much as the code."/><div className="collaboration-grid">{collaborations.map((project,index)=><a href={project.repo} target="_blank" rel="noreferrer" className="collab-card" data-reveal style={{'--delay':`${index*100}ms`}} key={project.title}><span className="collab-index">0{index+1}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="round-arrow"><ArrowIcon/></div></a>)}</div></section>

      <section id="skills" className="section-shell content-section"><SectionHeading number="04" eyebrow="Capabilities" title="A practical, modern toolkit" copy="Technology choices guided by the problem—not trends, percentages, or buzzwords."/><div className="skills-grid">{skillGroups.map((group,index)=><article className="skill-card" data-reveal style={{'--delay':`${index*90}ms`}} key={group.title}><span className="skill-number">0{index+1}</span><h3>{group.title}</h3><div className="skill-list">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section id="education" className="section-shell content-section"><SectionHeading number="05" eyebrow="Education" title="Learning with momentum" copy="A computer science foundation strengthened by hands-on building and continuous independent learning."/><div className="education-list"><EducationItem logo="/assets/itu.jpeg" school="Information Technology University" degree="B.S. Computer Science" years="2023 — 2027" href="https://itu.edu.pk" delay="0ms"/><EducationItem logo="/assets/pgc.png" school="Punjab Group of Colleges" degree="Pre-Engineering" years="2021 — 2023" href="https://www.pgc.edu" delay="80ms"/><EducationItem logo="/assets/lggs.png" school="Lahore Grammar School" degree="Matriculation" years="Completed 2021" href="https://lggs.edu.pk/" delay="160ms"/></div></section>

      <section id="contact" className="section-shell contact-section" data-reveal><p className="section-eyebrow"><span>06</span> Start a conversation</p><h2>Have an idea worth building?</h2><p>I’m always open to thoughtful projects, internship opportunities, and conversations about AI or product engineering.</p><div className="hero-actions contact-actions"><a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="button button-primary">Message on LinkedIn <ArrowIcon/></a><a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="button button-secondary"><GithubIcon/> View GitHub</a></div></section>
      <footer className="section-shell footer"><span>© {new Date().getFullYear()} Sameer Aamir</span><span>Designed & built with intention.</span></footer>
    </main>
  )
}

function SectionHeading({number,eyebrow,title,copy}) { return <div className="section-heading" data-reveal><p className="section-eyebrow"><span>{number}</span> {eyebrow}</p><div><h2>{title}</h2><p>{copy}</p></div></div> }

function ProjectCard({title,eyebrow,description,tags,repo,accent,index}) { return <article className={`project-card accent-${accent}`} data-reveal style={{'--delay':`${index*100}ms`}}><div className="project-topline"><span>{eyebrow}</span><span>0{index+1}</span></div><div className="project-glow" aria-hidden="true"/><div className="project-content"><h3>{title}</h3><p>{description}</p><div className="tag-row">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><a href={repo} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${title} on GitHub`}><GithubIcon/><span>View repository</span><ArrowIcon/></a></article> }

function EducationItem({logo,school,degree,years,href,delay}) { return <a href={href} target="_blank" rel="noreferrer" className="education-item" data-reveal style={{'--delay':delay}}><img src={logo} alt=""/><div><h3>{school}</h3><p>{degree}</p></div><span>{years}</span><div className="round-arrow"><ArrowIcon/></div></a> }
