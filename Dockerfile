# 1. Base Image (Kita pakai Node 24 Alpine biar ringan tapi sama kayak laptopmu)
FROM node:24-alpine AS base

# 2. Install Dependencies (Tahap Belanja)
FROM base AS deps
# Masalah klasik Node Alpine: butuh libc6-compat biar lancar
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy daftar belanjaan dulu
COPY package.json package-lock.json* ./
# Install bahan-bahan
RUN npm ci

# 3. Builder (Tahap Memasak)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ini perintah build Next.js.
# Pastikan di next.config.ts sudah ada output: "standalone"
RUN npm run build

# 4. Runner (Tahap Penyajian - Production)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Telemetry dimatiin biar gak kirim data ke Vercel (privasi)
ENV NEXT_TELEMETRY_DISABLED 1

# Bikin user biasa biar aman (jangan run as root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy hasil masakan yang sudah jadi (Standalone folder)
COPY --from=builder /app/public ./public
# Folder .next/standalone ini isinya cuma file yg dipake doang (kecil banget)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Pakai user aman tadi
USER nextjs

# Buka port 3000
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Jalankan servernya
CMD ["node", "server.js"]