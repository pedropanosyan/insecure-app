# React Security Best Practices Workshop

The intention of this project is to show the potential vulnerabilities can be encountered on a React.js project.
The objective is to try to cover each vulnerability as much as possible, this means, to cover most layers possible.

## Project content

The project is based of:
 - React.JS project
 - ExpressJS, as external server (mocking the attacker server to inject attacks)


## Running Project

### `npm install`
Install all dependencies
```bash
    npm install && cd externalServer && npm install && cd ..
```

### `Start project`

```bash
    npm run start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Open an other console to start the external server
```bash
    cd externalServer && node .
```
Runs ExpressJS proyect on [http://localhost:3001], You should run this backend with [ngrok](https://ngrok.com/download) to make sure the attacker server is completely isolated from the frontend (different domain) to simulate more accurately the environment


