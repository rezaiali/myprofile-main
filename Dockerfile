# Build stage
FROM node:18-alpine AS builder

# Set environment variables (do not set NODE_ENV=production here to keep devDependencies)
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app


# Install dependencies first (better layer caching)
COPY package*.json ./
COPY next.config.ts ./

# Install dependencies (include devDependencies needed for build)
RUN npm ci --no-audit --no-fund --include=dev

# Copy source and build
COPY . .

RUN npm run build

# Runtime stage (use Node instead of Nginx)
FROM node:18-alpine

WORKDIR /app

# Copy built app and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
