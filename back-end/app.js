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

// route for HTTP GET requests to /MyCloset
app.get("/MyCloset", (req, res) => {
    const clothing = {
      heading: "Flower Shirt",
      alt: "Flower shirt",
      src: "/static/images/clothing.jpg",
      details: "Nike Flower Shirt, white, size small."
    }
  
    // send the response as JSON to the client
    res.json(body)
  })

  // route for HTTP GET requests to /MyOutfits
app.get("/MyOutfits", (req, res) => {
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
app.get("/TryOn", (req, res) => {
    const clothing = {
        heading: "Flower Shirt",
        alt: "Flower shirt",
        src: "/static/images/clothing.jpg",
        details: "Nike Flower Shirt, white, size small."
    }
  
    // send the response as JSON to the client
    res.json(body)
  })