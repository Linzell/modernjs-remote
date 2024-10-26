FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-offline

COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine

# Install nginx
RUN apk add --no-cache nginx

WORKDIR /app

# Copy built files and dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create start script directly in the container
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'mkdir -p /run/nginx' >> /start.sh && \
    echo 'nginx' >> /start.sh && \
    echo 'cd /app && node ./dist/bundles/main.js' >> /start.sh && \
    chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
