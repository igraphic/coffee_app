docker network create backend
#docker pull mongo
docker run -p 27017:27017 --network backend --name mongodb.host -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=GP43qvGeSM -d mongo
