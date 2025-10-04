const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

// Simple in-memory cache for fetched GitHub repos
let cachedRepos = []
let lastFetched = 0
const CACHE_TTL = process.env.CACHE_TTL_MS ? parseInt(process.env.CACHE_TTL_MS, 10) : 5 * 60 * 1000 // 5 minutes

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'sameeramir959'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '' // optional, increases rate limit
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || '' // optional, used to verify webhook signatures
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'sameeramir959@gmail.com' // where to send contact form emails (optional)
const SMTP_URL = process.env.SMTP_URL || '' // optional SMTP connection string

// In-memory messages store (for demo). For production, persist to a DB.
const messages = []

let mailTransporter = null
if (SMTP_URL) {
  // If SMTP_URL provided (e.g., smtp://user:pass@smtp.example.com:587) we create transporter
  mailTransporter = nodemailer.createTransport(SMTP_URL)
}

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

async function fetchReposFromGithub() {
  try {
    const perPage = 100
    const url = `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?per_page=${perPage}&sort=updated`
    const headers = {
      'User-Agent': 'portfolio-app',
      'Accept': 'application/vnd.github+json'
    }
    if (GITHUB_TOKEN) headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`

    const res = await fetch(url, { headers })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`GitHub API error: ${res.status} ${text}`)
    }
    const data = await res.json()
    // Map to minimal shape used by client
    const mapped = data.map(r => ({
      id: r.id,
      title: r.name,
      description: r.description,
      repo: r.html_url,
      language: r.language,
      updated_at: r.updated_at,
      topics: r.topics || []
    }))
    cachedRepos = mapped
    lastFetched = Date.now()
    return mapped
  } catch (err) {
    console.error('Failed to fetch repos from GitHub', err)
    throw err
  }
}

// GET /api/projects - returns cached repos or fetches from GitHub if stale
app.get('/api/projects', async (req, res) => {
  try {
    if (!cachedRepos.length || (Date.now() - lastFetched) > CACHE_TTL) {
      await fetchReposFromGithub()
    }
    res.json(cachedRepos)
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch projects' })
  }
})

// Utility: verify GitHub webhook signature (x-hub-signature-256)
function verifyGithubSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false
  const sigParts = signatureHeader.split('=')
  if (sigParts.length !== 2) return false
  const algo = sigParts[0]
  const signature = sigParts[1]
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(rawBody)
  const digest = hmac.digest('hex')
  try {
    return crypto.timingSafeEqual(Buffer.from(digest, 'hex'), Buffer.from(signature, 'hex'))
  } catch (e) {
    return false
  }
}

// Webhook endpoint to receive GitHub push events and refresh cache
// Note: GitHub signs payloads with X-Hub-Signature-256 when a secret is configured.
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['x-hub-signature-256'] || ''
  if (WEBHOOK_SECRET) {
    const valid = verifyGithubSignature(req.body, signature, WEBHOOK_SECRET)
    if (!valid) {
      console.warn('Invalid webhook signature')
      return res.status(401).send('invalid signature')
    }
  }

  // Optionally, inspect the event type and only refresh on push or create
  const event = req.headers['x-github-event']
  if (event === 'push' || event === 'create' || event === 'repository') {
    try {
      await fetchReposFromGithub()
      return res.status(200).send('ok')
    } catch (e) {
      return res.status(500).send('failed')
    }
  }

  // For other events, just acknowledge
  res.status(200).send('ignored')
})

// Contact endpoints
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'name, email, message required' })

  const entry = { id: messages.length + 1, name, email, message, created_at: new Date().toISOString() }
  messages.push(entry)

  // Optionally forward via email
  if (mailTransporter && CONTACT_EMAIL) {
    try {
      await mailTransporter.sendMail({
        from: CONTACT_EMAIL,
        to: CONTACT_EMAIL,
        subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p>From: ${name} &lt;${email}&gt;</p><pre>${message}</pre>`
      })
    } catch (e) {
      console.error('Failed to send contact email', e)
    }
  }

  res.status(201).json({ ok: true })
})

app.get('/api/messages', (req, res) => {
  // Note: in production secure this endpoint
  res.json(messages)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server running on', port))
