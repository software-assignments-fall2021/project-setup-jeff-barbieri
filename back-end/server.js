#!/usr/bin/env node
const express = require('express')
const app = express()
const server = require("./app") // load up the web server
const port = process.env.PORT || 5000 // the port to listen to for incoming requests

// OLD WAY
// call express's listen function to start listening to the port
// const listener = server.listen(port, function () {
//   console.log(`Server running on port: ${port}`)
// })

// app.get('/back-end', (req, res) => {
//   res.send({express: 'EXPRESS BACK END CONNECTED TO REACT'})
// })

// NEW WAY (Brian)
app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/back-end', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}