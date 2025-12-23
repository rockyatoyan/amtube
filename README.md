# Amtube - YouTube Clone

📚 This repository represents [Nx](https://nx.dev) monorepo with [NestJS](https://nestjs.com) and [Next.js](https://nextjs.org) apps with [BullMQ](https://bullmq.io) worker.

It shows:

- using `Prisma` with `NestJS`
- using `BullMQ` workers to proccess heavy operations
- how to trancode video file to different qualities with `ffmpeg`
- using `HLS` to stream video file in SPA
- JWT auth strategy
- `Next.js` rendering strategies

## Useful commands

```bash
# Start Next.js app in development
npm run client:dev

# Start Nest app in development (all dev services will also start with this command)
npm run server:dev

# Start Nest app in production (all prod services will also start with this command)
npm run server:prod

# Start Next.js app in production (start only after starting Nest app production)
npm run client:prod

```
