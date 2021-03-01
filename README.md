# Coffee APP API 
API to list coffee machines and coffee pods.

## Stack and Tools
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [Babel](https://babeljs.io/)
* [Jest](https://jestjs.io/)
* [Supertest](https://www.npmjs.com/package/supertest)
* [Eslint](https://eslint.org/)

## Pre-requests
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/) (Or you can use the below docker commands)

```shell
docker pull mongo
docker run -p 27017:27017 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=GP43qvGeSM -d mongo

```
## How to use it?
* Clone the git repo to your machine
* Switch to the repo folder
* Execute `npm install`
* To seed the database, execute `npm run seed-db`
* To test, execute `npm test`
* To run the server, execute `npm start`

## Configurations:
The API default configurations can be found in the `config` folder,where you can update the following settings:

* Application Port
* Database Settings
* Routes

## API Endpoints

### Coffee Machines: `GET /coffee/machines`
Use this endpoint to list all coffee machines, and can be used to filter based on the coffee machines attributes.

* **Query URL Example:** `http://localhost:8484/coffee/machines?product_type=COFFEE_MACHINE_SMALL&water_line_compatible=true`

### Coffee Machines: `GET /coffee/pods`
Use this endpoint to list all coffee pods, and can be used to filter based on the coffee pods attributes.

* **Query URL Example:** `http://localhost:8484/coffee/pods?product_type=COFFEE_POD_SMALL&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=3`

