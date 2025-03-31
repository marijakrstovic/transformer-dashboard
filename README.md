# Transformer Dashboard

A production-ready Vue 3 + TypeScript app that displays and filters transformer data, using real-time charts and clean UI components.

## 🚀Live demo and deployments

- 🔗 GitHub Pages: [https://marijakrstovic.github.io/transformer-dashboard/](https://marijakrstovic.github.io/transformer-dashboard/)

GitHub Actions CI/CD is configured to auto-deploy to GitHub Pages on every push to `main`.

## 📡 Data ingestion

The app fetches data from a mock API hosted on Mocky.io, simulating a real HTTP backend:  
🔗 https://run.mocky.io/v3/ed165275-4e03-4d53-b3a1-7b98ca1eb2f4

## 🛠 Tech stack

- ⚙️ Vue 3 + TypeScript
- 📦 Pinia (state management with persistence)
- 📊 Chart.js (real-time voltage line chart)
- 🎨 Tailwind CSS (utility-first styling)
- 🛠 Lodash (debouncing, deep comparisons)
- ⚡ Vite (build & dev tooling)
- 🐳 Docker + Nginx (containerized production build)
- 🤖 GitHub Actions (CI/CD pipeline with auto-deploy)

## 🚀 Setup

```bash
npm install
```

## ▶️ Run locally

```bash
npm run dev
```

## 🧱 Build

```bash
npm run build
```

## 🔍 Preview production build

```bash
npm run preview
```

## 🐳 Docker

Build and run container:

```bash
docker build -t transformer-dashboard .
docker run -d -p 8080:80 transformer-dashboard
```

Then open: http://localhost:8080

Docker Compose (Alternative):

```bash
docker-compose up --build
```

Then open: http://localhost:8080
