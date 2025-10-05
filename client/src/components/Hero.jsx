import React, { useEffect, useState } from 'react'
import Stars from './Stars'
import SkillBar from './SkillBar'
import Rain from './Rain'

export default function Hero() {
  const PINNED_PROJECTS = [
    {
      id: 'portfolio',
      title: 'portfolio',
      description: 'This portfolio site (React + Vite + Tailwind).',
      repo: 'https://github.com/Sameer-959/portfolio'
    },
    {
      id: 'internship-2025',
      title: 'internship-2025',
      description: 'My main internship project with collaboration.',
      repo: 'https://github.com/Sameer-959/internship-2025'
    },
    {
      id: 'Scrimba-Question',
      title: 'Scrimba-Question',
      description: 'A Python project for Scrimba challenge.',
      repo: 'https://github.com/Sameer-959/Scrimba-Question'
    }
  ];

  const COLLABORATED_PROJECTS = [
    {
      id: 'petconnect',
      title: 'PetConnect',
      description: 'PetConnect is a social network application focused on pets and animal care, featuring an AI assistant and social features for pet owners.',
      repo: 'https://github.com/iam-hassan/PetConnect'
    },
    {
      id: 'ani-track',
      title: 'Ani-Track',
      description: 'Ani-Track is a platform for anime fans inspired by MyAnimeList, with social features, anime lists, and community engagement.',
      repo: 'https://github.com/Kenji-x-S/Ani-Track'
    }
  ];

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

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nameEl = document.getElementById('hero-name')
    if(!nameEl) return
    const finalText = 'Sameer Aamir'
    nameEl.setAttribute('aria-label', finalText)

    const chars = finalText.split('')
    const revealDelays = chars.map((_, i) => i * 4) // stagger each letter
    const holdFrames = 22 // frames a letter scrambles before locking
    const endFrame = revealDelays[revealDelays.length - 1] + holdFrames + 6

    let frame = 0
    const raf = () => {
      const out = chars.map((ch, i) => {
        const start = revealDelays[i]
        if (frame >= start + holdFrames) return ch
        if (frame >= start) return letters[Math.floor(Math.random() * letters.length)]
        return ' '
      })
      nameEl.textContent = out.join('')
      frame++
      if (frame <= endFrame) requestAnimationFrame(raf)
      else nameEl.textContent = finalText
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative">
      <Rain />
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />
      <Stars />
      <div className="relative z-10">
        {/* Centered hero intro */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl text-center p-8">
            <div className="mx-auto w-32 h-32 rounded-full bg-neutral-900/40 ring-1 ring-white/10 overflow-hidden float-avatar mb-6" data-reveal data-anim="zoom-in">
              <img src="/assets/pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl font-extrabold mb-6" data-reveal data-anim="fade-up"><span id="hero-name" className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Sameer Aamir</span></h1>
            <p className="mt-2 text-gray-300 max-w-2xl mx-auto mb-6" data-reveal data-anim="fade-in">I’m a Machine Learning and Full‑Stack Developer who enjoys turning ideas into polished, fast, and accessible products. I love shipping clean UIs, thoughtful APIs, and data‑driven features — from model training to deployment — with a strong focus on developer experience and performance.</p>

            <div className="flex items-center justify-center gap-4 mb-6" data-reveal data-anim="fade-up">
              <a href="#projects" className="px-6 py-3 bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-500 transition transform pulse-cta">View Work</a>
            </div>

            {/* Removed social names/links here */}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-16 max-w-5xl mx-auto px-6" data-reveal data-anim="fade-in">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="bg-neutral-900/30 rounded-xl p-4 ring-1 ring-white/6 flex items-start gap-4">
            <img src="/assets/arbisoft.png" alt="Arbisoft logo" className="w-12 h-12 rounded object-contain bg-white/5 flex-shrink-0" />
            <div>
              <div className="text-gray-200 font-semibold">Arbisoft — ML Intern</div>
              <div className="text-sm text-gray-400">2025 • Lahore, PK</div>
              <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                <li>Built and iterated ML workflows using TensorFlow and scikit‑learn for classification, regression, and embedding tasks.</li>
                <li>Designed data pipelines for preprocessing, feature engineering, and evaluation; automated experiments and reporting.</li>
                <li>Integrated trained models into Node.js services with clean APIs, monitoring, and performance profiling.</li>
                <li>Collaborated with engineers on code reviews, reproducible notebooks, and deployment best practices.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solo Projects */}
        <section className="mt-14 max-w-5xl mx-auto px-6" data-reveal data-anim="fade-in">
          <h2 className="text-2xl font-bold mb-4">Solo Projects</h2>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-4 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">
          {PINNED_PROJECTS.length ? PINNED_PROJECTS.map((p, i) => <ProjectCard key={p.id} {...p} index={i} />) : (
            <div className="col-span-full text-center text-gray-300 py-12" data-reveal data-anim="fade-in">No projects found.</div>
          )}
        </section>

        {/* Collaborated Projects Section */}
        <section id="collaborations" className="mt-20 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 pb-16">
          <h2 className="col-span-full text-2xl font-bold mb-4" data-reveal data-anim="slide-right">Collaborated Projects</h2>
          {COLLABORATED_PROJECTS.length ? COLLABORATED_PROJECTS.map((p, i) => <ProjectCard key={p.id} {...p} index={i} />) : (
            <div className="col-span-full text-center text-gray-300 py-12" data-reveal data-anim="fade-in">No collaborations found.</div>
          )}
        </section>

        {/* Twitter contact section - just above Skills */}
        <section className="max-w-3xl mx-auto mt-12 text-center" data-reveal data-anim="slide-left">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Let’s Talk</h2>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Got an idea, question, or feedback? I’m most responsive on Twitter —
            {' '}<a href="https://twitter.com/sameeramir95" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">send me a quick DM</a>
            {' '}and I’ll get back as soon as I can.
          </p>
        </section>

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

          {/* Education section follows */}
          <div className="p-4 bg-neutral-900/30 rounded" data-reveal>
            <h3 className="font-semibold">Education</h3>
            <div className="mt-3">
              <a href="https://itu.edu.pk" target="_blank" rel="noreferrer" className="itu-link inline-flex items-center gap-4 p-2 rounded" aria-label="Visit Information Technology University website">
                <img src="/assets/itu.jpeg" alt="Information Technology University logo" className="w-14 h-14 rounded object-cover itu-badge" />
                <div>
                  <div className="text-gray-200 font-medium">Information Technology University</div>
                  <div className="text-sm text-gray-400">B.S. Computer Science (2023–2027)</div>
                </div>
              </a>
              <a href="https://www.pgc.edu" target="_blank" rel="noreferrer" className="itu-link inline-flex items-center gap-4 p-2 rounded mt-4">
                <img src="/assets/pgc.png" alt="Punjab Group of Colleges logo" className="w-12 h-12 rounded object-cover itu-badge" />
                <div>
                  <div className="text-gray-200 font-medium">Punjab Group of Colleges</div>
                  <div className="text-sm text-gray-400">Pre-Engineering (2021–2023)</div>
                </div>
              </a>
              <a href="https://lggs.edu.pk/" target="_blank" rel="noreferrer" className="itu-link inline-flex items-center gap-4 p-2 rounded mt-4" aria-label="Visit Lahore Grammar School website">
                <img src="/assets/lggs.png" alt="Lahore Grammar School logo" className="w-12 h-12 rounded object-cover itu-badge" />
                <div>
                  <div className="text-gray-200 font-medium">Lahore Grammar School</div>
                  <div className="text-sm text-gray-400">Matriculation (2006–2021)</div>
                </div>
              </a>
            </div>
          </div>

          <div className="p-4 bg-neutral-900/30 rounded" data-reveal>
            <h3 className="font-semibold">Interests</h3>
            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
              <li>Machine Learning and Applied AI</li>
              <li>Deep Learning, LLMs, and Prompt Engineering</li>
              <li>Full‑Stack Web (React, Node.js, Express)</li>
              <li>System Design and Scalable Architectures</li>
              <li>Open Source and Developer Tooling</li>
              <li>Data Visualization and Product UX</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, repo, index }) {
  return (
    <article data-reveal data-anim="flip" className="project-card bg-neutral-900/30 p-6 rounded-xl backdrop-blur-sm ring-1 ring-white/6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <a href={repo} target="_blank" rel="noreferrer" className="p-2 bg-neutral-800/40 rounded hover:bg-neutral-700/50 transition" data-reveal data-anim="zoom-in" aria-label={`Open ${title} on GitHub`} title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
