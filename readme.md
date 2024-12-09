# Dockerfile

To create image
docker run -p 3000:3000 task-backend
docker compose up --build

# kill port

kill -9 $(lsof -t -i :5433)
sudo lsof -i :5433
sudo kill -9 505

