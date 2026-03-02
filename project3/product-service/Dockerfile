
# Use the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install dependencies
RUN npm install

# Run the application
CMD ["npm", "run", "dev"]
