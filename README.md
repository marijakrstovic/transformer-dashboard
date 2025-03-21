# Transformer Dashboard

A lightweight Vue 3 + TypeScript web app that displays and filters transformer data, using real-time charts and clean UI components.

## 🌐 Live Demo

Deployed on Vercel:
🔗 https://transformer-dashboard.vercel.app

## 📡 Data Source

The app fetches data from a mock API hosted on Mocky.io, simulating a real HTTP backend:
🔗 https://run.mocky.io/v3/44b96068-4b26-4713-8687-f5b635043de0

## 🛠 Tech Stack
Vue 3 + TypeScript
Pinia (state management with persistence)
Chart.js (for transformer voltage visualization)
Tailwind CSS (utility-first styling)
Lodash (debouncing, deep comparisons, utility helpers)
Vite (for blazing-fast dev + build)
Docker + Nginx (for production build and containerization)
Vercel (for deployment)

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

Docker Compose (Alternative Option):

```bash
docker-compose up --build
```
Then open: http://localhost:8080