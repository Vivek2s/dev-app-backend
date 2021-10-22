# dev-app-backend

A Dev app Node.js app using [Express](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) v10

```sh
git clone git@github.com:Vivek2s/dev-app-backend.git # or clone your own fork
cd dev-app-backend
npm install
npm start

Replace .env.sample to .env file
```

Your app should now be running on [localhost:4000](http://localhost:4000/).

POSTMAN Link: [Link](https://www.getpostman.com/collections/2414368a19acd1c7581d)
API v1: http://localhost:4000/api/v1

Skip this Steps, if you use same mogodb string present in .env
In Postman, Steps to follow( only if connect with new database):

Step 1. Request: Basic Seed Date. 

Step 2. Get Client secret.
```
Request body: {
  "username": "management@gmail.com",
  "password": "secret",
  "clientId": "devapp"
}
```

For Signup & Login, Authorization:
Type: Basic Auth
username: devapp
password: {client secret}
