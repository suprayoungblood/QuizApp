# Use an official Node.js runtime as the parent image
FROM node:16-alpine

# Create app directory and set as working directory
WORKDIR /app

# Change ownership of the working directory to the 'node' user
# This ensures that the 'node' user can write to this directory
RUN chown -R node:node /app

# Switch to 'node' user before running npm install to avoid permission issues
USER node

# Copy package.json and package-lock.json
COPY --chown=node:node package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code, ensuring 'node' user ownership
COPY --chown=node:node . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application using Vite's development server
CMD ["npm", "run", "dev"]
