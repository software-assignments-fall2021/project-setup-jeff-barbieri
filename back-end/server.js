#!/usr/bin/env node
const express = require('express')
const app = express()
const server = require("./app") // load up the web server
// const port = process.env.PORT || 5000 // the port to listen to for incoming requests
// import routes
// const authRoutes = require("./routes/auth");


/* Hey Olivia, I think if you move this code to app.js
it should work. app.js is our middleware.  -Brian :) */
/* ----------------------------------------------------- */
// // middlewares
// app.use(express.json()); // for body parser

// // Retrieving mongoDB connection from App.js
// const mongoDB = server.mongoDB

// console.log(mongoDB)

// //route middlewares
// app.use("/api/user", authRoutes)
/* ------------------------------------------------------ */

// Listen on port 5000
const port = 5000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}