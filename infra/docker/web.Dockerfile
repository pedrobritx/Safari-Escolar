FROM node:20-alpine

WORKDIR /app

# Copy package.json to install dependencies
COPY apps/web/package.json apps/web/package-lock.json* ./apps/web/

WORKDIR /app/apps/web
RUN npm install

# Copy the rest of the monorepo
COPY . ../../

EXPOSE 3000
