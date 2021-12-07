#!/usr/bin/env node
const express = require('express')
const app = express()
const server = require("./app") // load up the web server
// const port = process.env.PORT || 5000 // the port to listen to for incoming requests
// import routes
const authRoutes = require("./routes/auth");

// middlewares
app.use(express.json()); // for body parser

// Retrieving mongoDB connection from App.js
const mongoDB = server.mongoDB

console.log(mongoDB)

//route middlewares
app.use("/api/user", authRoutes)

// Listen on port 5000
app.listen(5000, () => console.log("server is running..."));


// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}