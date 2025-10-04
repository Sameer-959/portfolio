Server (Express)

Setup

1. cd server
2. npm install
3. npm run dev

Environment variables
- `GITHUB_USERNAME` — your GitHub username (defaults to `yourusername`).
- `GITHUB_TOKEN` — optional personal access token to increase GitHub API rate limits.
- `WEBHOOK_SECRET` — optional secret to verify incoming GitHub webhook payloads.
- `PORT` — optional server port (default 5000).
 - `CONTACT_EMAIL` — optional email address to receive contact form messages.
 - `SMTP_URL` — optional SMTP URL (for nodemailer) to forward contact messages. Example: `smtp://user:pass@smtp.example.com:587`.

GitHub integration

- The server exposes `/api/projects` which fetches your public repositories from the GitHub API and caches them.
- To keep the list up-to-date automatically, configure a GitHub webhook on your GitHub account or repository:

	1. In your repository or organization settings, go to Webhooks -> Add webhook.
	2. Payload URL: `https://<your-server>/api/webhook`
	3. Content type: `application/json`.
	4. Secret: set the same value as `WEBHOOK_SECRET` env variable (optional but recommended).
	5. Which events: choose `Just the push event` (or others like `create`, `repository`).

When a push occurs, GitHub will post to `/api/webhook`. The server will verify the signature (if `WEBHOOK_SECRET` is set) and refresh the cached repo list.

Notes
- If you don't want to use webhooks, the server will auto-refresh every 5 minutes (adjust with `CACHE_TTL_MS`).
- For private repositories, provide a `GITHUB_TOKEN` with repo scope.

Contact API

- POST `/api/contact` — accepts JSON {name, email, message}. Stores in memory and optionally forwards to `CONTACT_EMAIL` via SMTP if `SMTP_URL` is provided.
- GET `/api/messages` — returns stored messages (for demo only; secure this in production).