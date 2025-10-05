import React from 'react'

export default function SkillBar({skill, level}){
  const pct = Math.max(0, Math.min(100, level))
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-gray-300"><span>{skill}</span><span>{pct}%</span></div>
      <div className="w-full bg-white/6 rounded h-3 mt-1">
        <div className="h-3 rounded bg-gradient-to-r from-indigo-500 to-purple-500" style={{width: `${pct}%`}} />
      </div>
    </div>
  )
}
