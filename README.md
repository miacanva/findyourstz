# findyourstz

Tinder-like dating/finder web app for Tanzanians. This repository contains starter files and scaffolding for a React + TypeScript frontend, Node.js + TypeScript backend, PostgreSQL (PostGIS optional), Redis for caching, and an admin dashboard.

Quick start (development)
1. Install Docker & Docker Compose.
2. Copy `.env.example` to `.env` and set variables (DATABASE_URL, REDIS_URL, S3 keys, JWT secrets).
3. Run: `docker-compose up --build`
4. Backend: http://localhost:4000
5. Frontend: http://localhost:3000
6. Admin dashboard: http://localhost:3001

Architecture
- Frontend: React + TypeScript, Tailwind CSS
- Backend: Node.js + TypeScript (NestJS or Express)
- DB: PostgreSQL + Redis
- File storage: S3 / Spaces
- Realtime: Socket.IO

Development checklist
- [ ] Signup & verification flow
- [ ] Profile creation & photo uploads
- [ ] Discovery feed with swipe UX
- [ ] Match creation and chat
- [ ] Admin dashboard with moderation & analytics
- [ ] i18n (Swahili + English)
- [ ] Payment integration (Stripe / M-Pesa)
- [ ] Security & privacy compliance

License: MIT
