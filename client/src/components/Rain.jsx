import React, { useEffect, useRef } from 'react'

// Fullscreen canvas rain with subtle, rare lightning strikes
export default function Rain(){
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let dpr = Math.max(1, window.devicePixelRatio || 1)
    let width = 0, height = 0
    let rafId = 0

    const drops = []
    const DROP_COUNT = 240

    function resize(){
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function makeDrop(){
      return {
        x: Math.random() * width,
        y: Math.random() * -height,
        len: 12 + Math.random() * 18,
        speedY: 300 + Math.random() * 340,
        windX: 70 + Math.random() * 90, // left -> right
        thickness: 0.6 + Math.random() * 0.9,
      }
    }

    function ensureDrops(){
      while(drops.length < DROP_COUNT){ drops.push(makeDrop()) }
    }

    let strike = null // {x, y, life}

    function drawStrike(dt){
      if (!strike && Math.random() < 0.0008){
        const x = Math.random() * width
        strike = { x, y: 0, life: 0.12 }
      }
      if (strike){
        ctx.strokeStyle = 'rgba(200,210,240,0.35)'
        ctx.lineWidth = 1.3
        ctx.beginPath()
        let x = strike.x
        let y = strike.y
        ctx.moveTo(x, y)
        const segments = 6
        for (let i=0;i<segments;i++){
          x += (-18 + Math.random()*36)
          y += height * 0.085 + Math.random()*16
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        strike.life -= dt
        if (strike.life <= 0) strike = null
      }
    }

    function step(dt){
      // darker trail for a sad mood
      ctx.fillStyle = 'rgba(0,0,0,0.28)'
      ctx.fillRect(0, 0, width, height)

      drawStrike(dt)

      // raindrops
      ctx.strokeStyle = 'rgba(150,170,210,0.55)'
      drops.forEach(d => {
        d.y += d.speedY * dt
        d.x += d.windX * dt
        if (d.y - d.len > height){
          Object.assign(d, makeDrop())
          d.y = -d.len
        }
        if (d.x > width + 50){ d.x = -50 }
        ctx.lineWidth = d.thickness
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.windX*0.05, d.y - d.len)
        ctx.stroke()
      })
    }

    let last = performance.now()
    function loop(){
      const now = performance.now()
      const dt = Math.min(0.033, (now - last) / 1000)
      last = now
      step(dt)
      rafId = requestAnimationFrame(loop)
    }

    resize()
    ensureDrops()
    loop()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
  )
}


