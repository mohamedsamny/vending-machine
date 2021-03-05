# vending-machine
just another interview project

## ERD
![ERD](https://github.com/mohamedsamny/vending-machine/raw/main/docs/erd.png)

## Assumptions
This project is not handling corner cases, bad http requests, wrong parameters values and errors/exceptions. It was meant to demo ability to code an MVP in tight and constrained time.

In real life projects, I would version my API, implement authentication between Frontend and Backend, authorize user actions, validate user inputs and handle js promise exceptions properly in different API scenarios.

## Prerequisites
To run this project the following components needs to be installed before following the setup instructions:
1. [Nodejs](https://nodejs.dev/)
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting started
To run this project in development mode follow these instructions:

1. Ask the project's developer to provide you with the expected env variables values:
```bash
export DB_HOST=SOME_HOST
export DB_PASSWORD=SOME_SECRET
```

2. Install project dependencies:
```bash
npm install
```

3. Run the project
```bash
npm start
```

## Github Actions (CI)
I have implemented a simple CI pipeline utilizing Github actions which basically runs `eslint`to lint the javascript code and report if any rules are violated.

## Mongodb (Atlas)
This project is expected to connect to Mongodb as the datastore for the backend.
I've used:
1. `mongoose` library/client to execute queries from javascriptt.
2. `MongoDB Atlas Database` as the database provider.

The configs for this connection can be found in [`mongoose.js`](https://github.com/mohamedsamny/vending-machine/blob/main/mongoose.js) file.

I'm aware of database seeding concept to initialize the database with some documents for development and testing purposes but I have never implemented this myself before. Also, I did not have time to work on db seeds as a part of this project. 

## Tests
This project does not implement any tests as it was meant to be a POC/MVP during a very limited time.

## Architecture
I have used MVC architecture to organize the project code where we have:
1. `controllers` to handle API endpoints and execute business logic.
2. `models` to handle database schema and queries.
3. `views` to handle how render responses. In this stage we did not have to create any views yet.

