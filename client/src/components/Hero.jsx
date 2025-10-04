import React, { useEffect, useState } from 'react'
import { MailIcon } from '@heroicons/react/24/outline'
import Contact from './Contact'

export default function Hero(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    const API_BASE = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : ''
    const projectsUrl = API_BASE ? `${API_BASE}/api/projects` : '/api/projects'
    fetch(projectsUrl)
      .then(r=>r.json())
      .then(setProjects)
      .catch(()=>{
        // fallback
        setProjects([
          {id:1, title:'Project One', description:'A MERN app that does cool things.', repo:'#'},
          {id:2, title:'Project Two', description:'Another project with flashy UI.', repo:'#'}
        ])
      })
  },[])

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header>
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center text-4xl font-bold ring-1 ring-white/20">SA</div>
        <div>
          <h1 className="text-4xl font-extrabold">Sameer Aamir</h1>
          <p className="mt-2 text-gray-200 max-w-xl">Machine Learning and Full-Stack Developer with internship experience at Arbisoft, skilled in building intelligent systems and scalable web applications. Projects below are fetched from my GitHub account.</p>
            <div className="mt-3 flex gap-2 text-sm text-gray-300">
              <span>Summary:</span>
              <span>Full-stack MERN developer focused on clean code, accessible UI, and performant deployments.</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#projects" className="px-4 py-2 bg-indigo-500 rounded-md shadow hover:bg-indigo-400 transition">View Work</a>
              <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/10 rounded-md flex items-center gap-2 hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                GitHub
              </a>
              {import.meta.env.VITE_LIVE_URL && (
                <a href={import.meta.env.VITE_LIVE_URL} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-500 rounded-md shadow hover:bg-green-400 transition">Live site</a>
              )}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a href="https://github.com/Sameer-959" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">GitHub</a>
              <a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">Twitter</a>
              <a href="https://www.linkedin.com/in/SameerAamir/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <section id="summary" className="mt-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-gray-300">I build maintainable applications using the MERN stack, focusing on developer experience and accessible UIs. Open to internships and collaborative projects.</p>
      </section>

      <section id="skills" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 rounded"> 
          <h3 className="font-semibold">Skills</h3>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Scikit-learn</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MERN Stack</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="p-4 bg-white/5 rounded">
          <h3 className="font-semibold">Education</h3>
          <p className="mt-2 text-gray-300">B.S. Computer Science — Information Technology University (2023–2027)</p>
        </div>
        <div className="p-4 bg-white/5 rounded">
          <h3 className="font-semibold">Interests</h3>
          <p className="mt-2 text-gray-300">Open Source, AI Research, Deep Learning, MERN Applications, System Design</p>
        </div>
      </section>

      <section id="projects" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length ? projects.map(p=> <ProjectCard key={p.id} {...p} />) : (
          <div className="col-span-full text-center text-gray-300 py-12">No projects found — check your GitHub username or set up a webhook.</div>
        )}
      </section>

      <Contact />
    </div>
  )
}

function ProjectCard({title, description, repo}){
  return (
    <article className="bg-white/5 p-6 rounded-xl backdrop-blur-sm ring-1 ring-white/10 hover:scale-105 transform transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <a href={repo} target="_blank" rel="noreferrer" className="p-2 bg-white/6 rounded hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href={`mailto:sameeramir959@gmail.com?subject=${encodeURIComponent(title)}`} className="p-2 bg-white/6 rounded hover:bg-white/10 transition">
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
          <a href={repo} target="_blank" rel="noreferrer" className="text-indigo-300">View repo</a>
        </div>
      </div>
    </article>
  )
}
