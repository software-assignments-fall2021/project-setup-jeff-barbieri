// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require("path")

// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// import fs to read json files
'use strict';
const fs = require('fs');

// Brian getting it started
app.get("/", (req, res) => {
  res.send("Hello world!")
})

// read mycloset.json
let clothing;
fs.readFile('./data/mycloset.json', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("data: \n" + data);
  clothing = data;
});

// route for HTTP GET requests to /MyCloset
app.get("/mycloset", (req, res) => {
    // display mycloset.json
    res.send(clothing);
})

// route for HTTP GET requests to /MyOutfits
app.get("/myoutfits", (req, res) => {
    const clothing = {
      heading: "Winter Outfit",
      alt: "Winter outfit",
      src: "/static/images/clothing.jpg",
      details: "Nike Puffer Jacket, black, size small. Nike Joggers, black, size medium."
    }
  
    // send the response as JSON to the client
    res.json(body)
  })

    // route for HTTP GET requests to /TryOn
app.get("/tryon", (req, res) => {
    const clothing = {
        heading: "Flower Shirt",
        alt: "Flower shirt",
        src: "/static/images/clothing.jpg",
        details: "Nike Flower Shirt, white, size small."
    }
  
    // send the response as JSON to the client
    res.json(body)
  })

      // route for HTTP GET requests to /Login
app.get("/login", (req, res) => {
    // send the response as JSON to the client
    res.sendFile("/login.html")
  })

        // route for HTTP GET requests to /Register
app.get("/register", (req, res) => {
    // send the response as JSON to the client
    res.sendFile("/register.html")
  })

  // enable file uploads saved to disk in a directory named 'public/uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
      // take apart the uploaded file's name so we can create a new one based on it
      const extension = path.extname(file.originalname)
      const basenameWithoutExtension = path.basename(file.originalname, extension)
      // create a new filename with a timestamp in the middle
      const newName = `${basenameWithoutExtension}-${Date.now()}${extension}`
      // tell multer to use this new filename for the uploaded file
      cb(null, newName)
    },
  })
  const upload = multer({ storage: storage })

  // export express app to make it available to other modules
module.exports = app 