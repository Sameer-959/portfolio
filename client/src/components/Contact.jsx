import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function update(e){
    setForm(f=>({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try{
      const API_BASE = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : ''
      const contactUrl = API_BASE ? `${API_BASE}/api/contact` : '/api/contact'
      const res = await fetch(contactUrl, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('failed')
      setStatus({ok:true, message:'Message sent — thank you!'})
      setForm({name:'', email:'', message:''})
    }catch(err){
      setStatus({ok:false, message:'Failed to send message'})
    }finally{setLoading(false)}
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto mt-12 p-6 bg-white/5 rounded-xl">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <p className="mt-2 text-gray-300">Send me a message and I'll get back to you.</p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-3">
        <input name="name" value={form.name} onChange={update} placeholder="Your name" className="p-3 rounded bg-white/6" required />
        <input name="email" value={form.email} onChange={update} placeholder="Your email" className="p-3 rounded bg-white/6" required />
        <textarea name="message" value={form.message} onChange={update} placeholder="Message" rows={6} className="p-3 rounded bg-white/6" required />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-indigo-500 rounded" disabled={loading}>{loading? 'Sending...' : 'Send message'}</button>
          {status && (
            <div className={status.ok ? 'text-green-300' : 'text-red-300'}>{status.message}</div>
          )}
        </div>
      </form>
    </section>
  )
}
