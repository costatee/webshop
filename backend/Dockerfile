# Use Node.js 20.11.1 base image
FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Generate Prisma Client code
RUN npx prisma generate

# Build the application
RUN npm run build

RUN ls -al /app

# Expose the port the app runs on, here, I was using port 3333
EXPOSE 3333

# Use CMD to ensure the Prisma migration runs before the app starts
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
