#!/usr/bin/env node
const express = require('express')
const app = express()
const server = require("./app") // load up the web server
const port = process.env.PORT || 5000 // the port to listen to for incoming requests

// listen for port
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