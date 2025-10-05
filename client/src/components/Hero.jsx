import React, { useEffect, useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Stars from './Stars'
import SkillBar from './SkillBar'

export default function Hero() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const STATIC_PROJECTS = [
      { id: 'p1', title: 'Portfolio Website', description: 'This portfolio site (React + Vite + Tailwind) showcasing projects, skills and a contact form.', repo: 'https://github.com/Sameer-959/portfolio' },
      { id: 'p2', title: 'ML Internship Project', description: 'Machine learning model deployment and data pipeline used during my Arbisoft internship.', repo: 'https://github.com/Sameer-959/ml-internship' },
      { id: 'p3', title: 'Chat App', description: 'Real-time chat application built with Socket.io, Node.js and React.', repo: 'https://github.com/Sameer-959/chat-app' },
      { id: 'p4', title: 'E-commerce Demo', description: 'Small e-commerce demo using MERN stack and Stripe integration.', repo: 'https://github.com/Sameer-959/ecommerce-demo' }
    ]

    // Try fetching from the API (server). If server isn't available or returns empty, use static list.
    const API_BASE = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : ''
    const projectsUrl = API_BASE ? `${API_BASE}/api/projects` : '/api/projects'
    let didSet = false
    fetch(projectsUrl).then(r=>{
      if(!r.ok) throw new Error('fetch failed')
      return r.json()
    }).then(data=>{
      if(Array.isArray(data) && data.length){ setProjects(data); didSet = true }
    }).catch(()=>{
      // ignore
    }).finally(()=>{
      if(!didSet) setProjects(STATIC_PROJECTS)
    })
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative">
      <Stars />
      <div className="relative z-10">
        {/* Centered hero intro */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl text-center p-8">
            <div className="mx-auto w-32 h-32 rounded-full bg-neutral-900/40 flex items-center justify-center text-4xl font-bold ring-1 ring-white/10 float-avatar mb-6" data-reveal>SA</div>
            <h1 className="text-5xl font-extrabold mb-3" data-reveal>Sameer Aamir</h1>
            <p className="mt-2 text-gray-300 max-w-2xl mx-auto mb-6" data-reveal>Machine Learning and Full-Stack Developer with internship experience at Arbisoft, skilled in building intelligent systems and scalable web applications.</p>

            <div className="flex items-center justify-center gap-4 mb-6" data-reveal>
              <a href="#projects" className="px-6 py-3 bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-500 transition transform pulse-cta">View Work</a>
              <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="px-4 py-3 bg-neutral-900/40 rounded-md flex items-center gap-2 hover:bg-neutral-800/50 transition"> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                GitHub
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-300" data-reveal>
              <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
              <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {projects.length ? projects.map(p => <ProjectCard key={p.id} {...p} />) : (
            <div className="col-span-full text-center text-gray-300 py-12">No projects found.</div>
          )}
        </section>

        {/* Social contact line: user asked to say they can be reached on Twitter and show icons with names */}
        <div className="max-w-5xl mx-auto px-6 text-center mt-8" data-reveal>
          <p className="text-gray-300">You can reach me on Twitter — <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">@sameeramir95</a></p>
          <div className="mt-3 flex items-center justify-center gap-6 text-gray-300">
            <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.46-2 .55.72-.43 1.28-1.1 1.54-1.9-.67.4-1.4.68-2.18.84C18.6 4.7 17.74 4 16.7 4c-1.34 0-2.43 1.1-2.43 2.45 0 .19.02.37.06.54-2.02-.1-3.81-1.08-5.01-2.57-.21.36-.33.78-.33 1.23 0 .85.43 1.6 1.09 2.04-.5-.02-.97-.15-1.38-.38v.04c0 1.18.84 2.16 1.95 2.38-.2.05-.41.08-.63.08-.15 0-.3-.01-.44-.04.3.93 1.16 1.6 2.19 1.62C8.7 15.6 7.3 16.2 5.78 16.2c-.2 0-.39-.01-.58-.03 1.13.73 2.47 1.15 3.9 1.15 4.68 0 7.24-3.86 7.24-7.21v-.33c.5-.36.95-.81 1.3-1.33-.46.2-.95.33-1.46.39.53-.34.94-.9 1.13-1.56z"/></svg>
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.77v2.2h.07c.66-1.25 2.28-2.57 4.69-2.57C22.06 7.63 24 9.92 24 14.18V24h-5v-8.06c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.1-3.09 4.26V24H7.5V8z"/></svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Move skills/education to the end */}
        <section id="skills" className="mt-12 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
          <div className="p-4 bg-neutral-900/30 rounded" data-reveal>
            <h3 className="font-semibold">Skills</h3>
            <div className="mt-3">
              <SkillBar skill="Python" level={92} />
              <SkillBar skill="TensorFlow / PyTorch" level={82} />
              <SkillBar skill="JavaScript & React" level={88} />
              <SkillBar skill="Node.js & Express" level={80} />
              <SkillBar skill="MongoDB" level={75} />
              <SkillBar skill="C++" level={68} />
            </div>
          </div>

          <div className="p-4 bg-neutral-900/30 rounded" data-reveal>
            <h3 className="font-semibold">Education</h3>
            <div className="mt-3">
              <a href="https://itu.edu.pk" target="_blank" rel="noreferrer" className="itu-link inline-flex items-center gap-4 p-2 rounded" aria-label="Visit Information Technology University website">
                <img src="/src/assets/itu.jpeg" alt="Information Technology University logo" className="w-14 h-14 rounded object-cover itu-badge" />
                <div>
                  <div className="text-gray-200 font-medium">Information Technology University</div>
                  <div className="text-sm text-gray-400">B.S. Computer Science (2023–2027)</div>
                </div>
              </a>
              <a href="https://www.pgc.edu" target="_blank" rel="noreferrer" className="itu-link inline-flex items-center gap-4 p-2 rounded mt-4">
                <img src="/src/assets/pgc.png" alt="Punjab Group of Colleges logo" className="w-12 h-12 rounded object-cover itu-badge" />
                <div>
                  <div className="text-gray-200 font-medium">Punjab Group of Colleges</div>
                  <div className="text-sm text-gray-400">Pre-Engineering (2021–2023)</div>
                </div>
              </a>
            </div>
          </div>

          <div className="p-4 bg-neutral-900/30 rounded" data-reveal>
            <h3 className="font-semibold">Interests</h3>
            <p className="mt-2 text-gray-300">Open Source, AI Research, Deep Learning, MERN Applications, System Design</p>
          </div>
        </section>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, repo }) {
  return (
    <article data-reveal className="project-card bg-neutral-900/30 p-6 rounded-xl backdrop-blur-sm ring-1 ring-white/6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <a href={repo} target="_blank" rel="noreferrer" className="p-2 bg-neutral-800/40 rounded hover:bg-neutral-700/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href={`mailto:sameeramir959@gmail.com?subject=${encodeURIComponent(title)}`} className="p-2 bg-neutral-800/40 rounded hover:bg-neutral-700/50 transition">
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
          <a href={repo} target="_blank" rel="noreferrer" className="text-indigo-300">View repo</a>
        </div>
      </div>
    </article>
  )
}
