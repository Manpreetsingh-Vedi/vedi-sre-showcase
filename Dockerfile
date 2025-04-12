
# Build stage
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/src/server ./src/server

# Install only production dependencies
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Command to run the app - Using the correct file path
CMD ["node", "src/server/server.js"]
