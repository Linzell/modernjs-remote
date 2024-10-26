FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace and package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose default port (adjust as needed)
ENV PORT 3051
EXPOSE $PORT

# Start the application
CMD ["pnpm", "start"]
