
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies explicitly including express and other required packages
RUN npm install express body-parser nodemailer mysql2

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Command to run the app
CMD ["node", "src/server/server.js"]
