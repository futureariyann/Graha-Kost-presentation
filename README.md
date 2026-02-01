# Graha Kost v2.0 Proposal - Digital Transformation

Interactive digital presentation deck built for Flowmind Agency to propose the digital transformation of Graha Kost (1000 rooms).

## 🚀 Overview

This project is a high-performance, interactive slide deck built with web technologies to replace traditional PowerPoint/PDF presentations. It features smooth transitions, interactive charts, and responsive design optimized for both desktop projectors and mobile devices.

## 🛠 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (via CDN)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts
- **Language:** TypeScript

## 📦 Local Development

1. **Clone the repository**
   ```bash
   git clone <YOUR_REPO_URL>
   cd graha-kost-proposal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run local development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ☁️ Deployment (Cloudflare Pages)

This project is optimized for Cloudflare Pages.

### Configuration Settings
When connecting your Git repository to Cloudflare Pages, use these settings:

- **Framework Preset:** Vite
- **Build command:** `npm install && npm run build`
- **Build output directory:** `dist`
- **Environment Variables:**
  - `NODE_VERSION`: `20`

> **Note:** Do not use `npm ci` unless you have committed a `package-lock.json` file to your repository. The command `npm install` is safer for the initial deployment.

### Troubleshooting
If you see an error saying `npm ci can only install with an existing package-lock.json`, verify that your **Build command** in Cloudflare Settings > Builds & deployments is set to:
```bash
npm install && npm run build
```

## 📄 License

Proprietary content for Flowmind Agency.
