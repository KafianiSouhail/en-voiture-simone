# Étape 1 : Build Angular app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build --prod

# Étape 2 : Serve via Nginx
FROM nginx:alpine

COPY --from=build /app/dist/en-voiture-simone /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
