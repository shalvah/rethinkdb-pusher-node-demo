# rethinkdb-pusher-node-demo
Express app to demonstrate Pusher + RethinkDB for realtime functionality

[View tutorial](https://pusher.com/tutorials/live-node-rethinkdb)

## Prerequisites
- Node.js 8.10.0 or higher
- [RethinkDB 2.3.6 or higher.](https://rethinkdb.com/docs/install/)
- MongoDB 3.4 or greater
- A [Pusher account](https://pusher.com/signup) and [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started
Clone the project and install dependencies:

```bash
git clone https://github.com/shalvah/rethinkdb-pusher-node-demo
cd rethinkdb-pusher-node-demo && npm install
```

Copy the `.env.example` file to a `.env` file. Add your Pusher app credentials to this file:
```
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-app-cluster
```
Start your RethinkDB server by following [these instructions](https://rethinkdb.com/docs/install/).

Start the app:

```bash
npm start
```

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [RethinkDB](https://rethinkdb.com) - The open-source database for the realtime web
