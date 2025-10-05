import React, { useEffect, useRef } from 'react'

export default function Stars(){
  const ref = useRef(null)
  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = 0, h = 0
    let stars = []
    let blobs = []

    function resize(){
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function init(){
      stars = []
      blobs = []
      const count = Math.round((w*h)/5000)
      for(let i=0;i<count;i++){
        const layer = Math.random() < 0.14 ? 0.6 : (Math.random() < 0.15 ? 1.1 : 0.9)
        stars.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1.6 + (layer === 1.1 ? 0.8 : 0.2),
          a: Math.random()*0.9 + 0.1,
          da: (Math.random()*0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
          hue: 200 + Math.random()*60, // bluish-cyan to pale
          layer
        })
      }

      // Nebula blobs (colored, subtle)
      const blobCount = Math.max(2, Math.round(Math.sqrt(w*h)/180))
      for(let i=0;i<blobCount;i++){
        blobs.push({
          x: Math.random()*w,
          y: Math.random()*h*0.7,
          r: Math.random()*(Math.min(w,h)/3) + 120,
          hue: 240 + Math.random()*80,
          sat: 30 + Math.random()*30,
          light: 6 + Math.random()*12,
          a: 0.06 + Math.random()*0.16
        })
      }
    }

    function clearBackground(){
      // pure black background
      ctx.fillStyle = '#000'
      ctx.fillRect(0,0,w,h)
    }

    function drawStars(){
      // layered star drawing for depth
      for(const s of stars){
        s.a += s.da
        if(s.a <= 0.02) s.da = Math.abs(s.da)
        if(s.a > 1.0) s.da = -Math.abs(s.da)

        // small glow
        const glow = Math.min(0.9, s.a*0.9)
        ctx.beginPath()
        const hue = s.hue
        ctx.fillStyle = `rgba(${200 + (hue%60)}, ${220 - (hue%60)}, 255, ${glow*0.12})`
        ctx.arc(s.x, s.y, s.r*3, 0, Math.PI*2)
        ctx.fill()

        // bright core
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()
      }
    }

    let raf
    function loop(){
      clearBackground()
      drawStars()
      raf = requestAnimationFrame(loop)
    }

    function onResize(){ resize(); init() }
    resize(); init(); loop()
    window.addEventListener('resize', onResize)
    return ()=>{
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  },[])
  return <canvas ref={ref} className="fixed inset-0 -z-20 pointer-events-none" />
}
