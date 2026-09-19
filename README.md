# Train Tracker

React frontend for logging and reviewing workouts through the Train Tracker API.

## Setup

```sh
npm install
cp .env.example .env
npm start
```

Set `REACT_APP_API_URL` to the API root. For local development with `train-tracker-server`, the default is:

```sh
REACT_APP_API_URL=http://localhost:5000
```

## Scripts

```sh
npm start
npm test
npm run build
```

This project uses an older Create React App stack, so the start/build scripts include `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with newer Node versions.
