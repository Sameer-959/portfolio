import React, { useEffect, useRef } from 'react'

export default function SkillBar({skill, level}){
  const pct = Math.max(0, Math.min(100, level))
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if(!el) return
    el.style.width = '0%'
    el.style.transition = 'width 900ms cubic-bezier(.2,.9,.2,1)'
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          el.style.width = pct + '%'
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-300"><span>{skill}</span><span>{pct}%</span></div>
      <div className="w-full bg-white/6 rounded h-3 mt-1 overflow-hidden">
        <div ref={fillRef} className="h-3 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>
    </div>
  )
}
