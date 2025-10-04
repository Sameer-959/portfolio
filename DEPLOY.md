Deploying this portfolio (quick guide)

This document shows two simple deployment options that work well together:

- Frontend (client): Vercel (recommended) or Netlify
- Backend (server): Render (recommended) or Heroku / Docker host

I can't deploy from here, but I've added a GitHub Actions template you can enable in your GitHub repository to automate deployments when you push to `main`.

0) Prepare and push to GitHub (Step 0)

If you haven't created a GitHub repository yet, run these commands locally from the project root (PowerShell):

```powershell
cd e:\Portfolio\portfolio
git init
git add .
git commit -m "Initial portfolio"
# Create a repo on GitHub named 'portfolio' under your account 'Sameer-959' using the web UI.
git remote add origin https://github.com/Sameer-959/portfolio.git
git branch -M main
git push -u origin main
```

If the repo already exists or you use a different workflow (GitHub desktop), just make sure the remote points to `https://github.com/Sameer-959/portfolio.git` and push `main`.

1) Deploy client to Vercel (recommended)

- Create a Vercel account and connect your GitHub repo.
- In the Vercel dashboard, create a new project and point it at the `client` folder.
- Set build settings (Vite): the defaults are usually fine. Ensure Environment Variables are set in Vercel for the project:
  - `VITE_API_URL` (optional) — set to your server URL if server is deployed separately, e.g. `https://api.example.com`
  - `VITE_LIVE_URL` — set to your client URL `https://<your-site>.vercel.app` (used to show the "Live site" button)
- Deploy. Vercel handles builds and hosts the site.

2) Deploy server to Render (recommended)

- Create a Render account and connect your GitHub repo.
- Create a new Web Service. Choose the `server` folder as the root.
- Use the provided Dockerfile (or Node build). In Render service settings, set the Environment as `Node 18` or let Docker use the Dockerfile.
- Set Environment Variables in Render (from `server/.env.example`):
  - `GITHUB_USERNAME` (already defaults to your username)
  - `CONTACT_EMAIL` (defaults to your email)
  - `GITHUB_TOKEN` (optional, for higher API rate limits)
  - `WEBHOOK_SECRET` (optional, if you want GitHub webhooks to refresh cache)
  - `SMTP_URL` (optional, for forwarding contact form emails)

3) Webhook (optional)

- If you want GitHub pushes to automatically refresh the repo list, add a webhook in GitHub pointing to:
  - `https://<your-server>/api/webhook`
  - Content type: `application/json`
  - Secret: set to the same `WEBHOOK_SECRET` in your server environment.

4) GitHub Actions (optional, auto-deploy)

- I added a workflow template at `.github/workflows/deploy.yml`. It uses:
  - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` to deploy the client to Vercel via a GitHub Action.
  - `RENDER_SERVICE_ID` and `RENDER_API_KEY` to deploy the server to Render via their action.

You must add those secrets to your GitHub repository (Settings -> Secrets) before the workflow can deploy. If you don't want automated deploys, simply deploy manually via the provider dashboards.

5) After deploy

- Set `VITE_LIVE_URL` in your client host to your client URL and re-deploy (so the Live site button appears).
- If your server is on a different origin, set `VITE_API_URL` to your server root.

If you want, I can:
- Tailor the Actions workflow to a different provider (Heroku, DigitalOcean App Platform, Netlify, or GitHub Pages for client).
- Create a small script to help you create a secure webhook secret.


Troubleshooting

- If projects fail to load, check server logs and rates for GitHub API. Add `GITHUB_TOKEN` to increase rate limits.
- If contact form email doesn't arrive, configure `SMTP_URL` with a transactional mail provider (SendGrid, Mailgun, Postmark) or an SMTP server and set `CONTACT_EMAIL`.

Contact me with which provider you prefer and I can adapt the workflow to that provider.
