# Setup Node
FROM node:18-alpine as build

# Dependency and Build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Create JS Build
# RUN npm run build

EXPOSE 3000

CMD ["node", "index.js"]
# CMD ["sh", "-c", "cloud_sql_proxy -instances=my-react-project-97ea7:us-central1:demo-db=tcp:5432 & node index.js"]