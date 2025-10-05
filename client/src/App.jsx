import React from 'react'
import Hero from './components/Hero'
import PersistentBar from './components/PersistentBar'

export default function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <PersistentBar />
      <Hero />
    </div>
  )
}
