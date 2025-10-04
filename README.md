# Portfolio

This repository contains a MERN-style portfolio scaffold: a React + Tailwind frontend (client) and an Express backend (server). It demonstrates a flashy UI with clickable icons and a GitHub repo link to showcase your work.

Run locally

1. Install dependencies for both client and server:

	- Open two terminals. In the first:

```powershell
cd client; npm install
```

	- In the second:

```powershell
cd server; npm install
```

2. Start the server (default port 5000):

```powershell
cd server; npm run dev
```

3. Start the client:

```powershell
cd client; npm run dev
```

Notes
- Update GitHub links in `client/src/components/Hero.jsx` to point to your actual repos.
- Optionally provide a `MONGO_URI` and add models in `server/` to persist projects.

See `client/README.md` and `server/README.md` for more details.

Deploy & share

1. Deploy the server (options):
	- Render, Heroku, Fly, or use the provided `server/Dockerfile` to run in any container host.
	- Make sure to set environment variables (see `server/.env.example`) in your host's dashboard.

2. Deploy the client (options):
	- Vercel or Netlify: connect the `client` folder as a project and set `VITE_LIVE_URL` (optional) if you want a clickable public URL shown on the homepage.

3. Once deployed, set the `VITE_LIVE_URL` environment variable in your client host to your public URL (for example `https://sameer-portfolio.vercel.app`). The homepage will then show a prominent "Live site" link interviewers can click.

Notes
- If your server API is hosted on a different origin, set `VITE_API_URL` in the client deployment settings and update fetch calls accordingly.
- I can help deploy both client and server and wire the environment variables if you want.