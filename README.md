# Transformer Dashboard

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

Visit http://localhost:8080

Docker Compose (Alternative Option)
If you prefer using docker-compose:

```bash
docker-compose up --build
```

Then open: http://localhost:8080



The app is deployed to Vercel using its optimized static frontend pipeline. https://transformer-dashboard.vercel.app
A Docker setup is also provided in the repo to demonstrate containerization and to enable portable deployment to any Docker-supported platform.