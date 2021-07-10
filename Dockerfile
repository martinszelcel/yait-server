# Dockerfile for Node Express Backend

FROM node:latest

# Create App Directory
WORKDIR /app/server

# Install Dependencies
COPY package*.json yarn.lock ./
RUN yarn install --pure-lockfile

# Bundle app source
COPY . .

EXPOSE 5000

CMD ["yarn","start"]