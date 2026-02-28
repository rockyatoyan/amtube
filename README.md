# 📺 Amtube — Full-Stack Video Platform

A production-grade YouTube-like platform built in an **Nx monorepo**, featuring real-time video transcoding to multiple qualities, HLS adaptive streaming, JWT authentication, video recomendation strategies and a fully async job queue. Built end-to-end with TypeScript — from NestJS API to Next.js frontend.

![TypeScript](https://img.shields.io/badge/TypeScript-99%25-3178c6?logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-Backend-ea2845?logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-000000?logo=nextjs&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## ✨ Features

- 🎬 **Video upload & transcoding** — raw uploads are converted to 360p / 720p / 1080p asynchronously via ffmpeg, so the API stays responsive under load
- 📡 **HLS adaptive streaming** — the same protocol used by YouTube and Netflix; the player auto-switches quality based on network speed
- ⚙️ **Async job queue** — BullMQ + Redis offloads heavy transcoding work from the API into a dedicated worker process
- 🔐 **JWT authentication** — access + refresh token strategy with protected routes
- 📈 **Video trends** — video recomendation strategies
- 🏗️ **Nx monorepo** — shared TypeScript configs, types, and build caching across all apps in a single workspace
- 🎨 **Next.js rendering strategies** — SSR, SSG, and client-side fetching used deliberately per page based on data freshness requirements

---

## 🛠️ Tech Stack

| Layer              | Technology                    |
| ------------------ | ----------------------------- |
| Monorepo           | Nx                            |
| Backend            | NestJS + Prisma ORM           |
| Frontend           | Next.js                       |
| Database           | PostgreSQL                    |
| Job Queue          | BullMQ + Redis                |
| Video Processing   | ffmpeg                        |
| Streaming Protocol | HLS (HTTP Live Streaming)     |
| Auth               | JWT (access + refresh tokens) |
| Containerization   | Docker + Docker Compose       |
| Language           | TypeScript (99.6%)            |

---

## 🏗️ Architecture

```
amtube/
└── apps/
		├── server/     # NestJS API — auth, upload endpoints, video metadata
		└── client/     # Next.js — video feed, player, upload UI
```

**Upload flow:**

1. User uploads a raw video via the Next.js client
2. NestJS API accepts the file and enqueues a transcoding job via BullMQ
3. The worker picks up the job and runs ffmpeg to produce multi-quality HLS segments
4. The player streams the result, automatically adapting quality to network conditions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose

### Installation

```bash
git clone https://github.com/rockyatoyan/amtube.git
cd amtube
npm install
```

### Running in Development

```bash
# Start NestJS API + PostgreSQL + Redis (Docker services start automatically)
npm run server:dev

# Start Next.js client
npm run client:dev
```

### Running in Production

```bash
# Start all backend services
npm run server:prod

# Start Next.js client (run after backend is up)
npm run client:prod
```
