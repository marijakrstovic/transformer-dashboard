# Step 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm install

# Now copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve it with nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]