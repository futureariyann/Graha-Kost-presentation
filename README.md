# Graha Kost v2.0 Proposal - Digital Transformation

Interactive digital presentation deck built for Flowmind Agency to propose the digital transformation of Graha Kost (1000 rooms).

## 🚀 Overview

This project is a high-performance, interactive slide deck built with web technologies to replace traditional PowerPoint/PDF presentations. It features smooth transitions, interactive charts, and responsive design optimized for both desktop projectors and mobile devices.

## 🛠 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
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

2. **Install dependencies (Deterministic)**
   ```bash
   npm ci
   ```
   *Note: Using `npm ci` ensures you install the exact versions defined in `package-lock.json`.*

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

### Option 1: Connect via Dashboard (Recommended)
1. Go to the Cloudflare Dashboard > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select this repository.
4. Configure the build settings:
   - **Framework Preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node Version:** Add an Environment Variable named `NODE_VERSION` with value `20`.
5. Click **Save and Deploy**.

### Option 2: CLI Deployment (Manual)
If you prefer deploying from your terminal:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder:
   ```bash
   npx wrangler pages deploy dist --project-name=graha-kost-proposal
   ```

## 📄 License

Proprietary content for Flowmind Agency.
