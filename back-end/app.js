// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const path = require("path");

// import some useful middleware
const multer = require("multer"); // middleware to handle HTTP POST requests with file uploads
const axios = require("axios"); // middleware for making requests to APIs
require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
const morgan = require("morgan"); // middleware for nice logging of incoming HTTP requests

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")); // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// import fs to read json files
'use strict';
const fs = require('fs');

//import mongoose module
const mongoose = require('mongoose');

// environment variables for mongodb
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

//set up mongoose connection
const mongoDB = `mongodb+srv://${username}:${password}@cluster0.4ofnm.mongodb.net/cluster0?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Database connected");
}).catch(err=>{
  console.log(`Database not connected: ${err}`);
});

//get the connection
const db = mongoose.connection;

//attach connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// test
app.get("/", (req, res) => {
  res.send("Hello world!")
})
// -----------------------------------------------------------
/* MY CLOSET */
// read mycloset.json
let closetString = fs.readFileSync('./data/mycloset.json').toString();
let closet = JSON.parse(closetString);

// route for HTTP GET requests to /MyCloset
app.get("/my-closet", (req, res) => {
    res.json(closet)

})
// -----------------------------------------------------------
/*MY OUTFITS*/
// read myoutfits.json
let outfitsString = fs.readFileSync('./data/myoutfits.json').toString();
let outfits = JSON.parse(outfitsString);

// route for HTTP GET requests to /MyOutfits
app.get("/my-outfits", (req, res) => {
    res.send(outfits);
})

// -----------------------------------------------------------
/*TRY ON*/

// read tryon.json
let tryonString = fs.readFileSync('./data/tryon.json').toString();
let tryon = JSON.parse(tryonString);

// route for HTTP GET requests to /TryOn
app.get("/try-on", (req, res) => {
    res.send(tryon);
})

// -----------------------------------------------------------
/*MY MANNEQUIN*/

// read mymannequin.json
let mannequinString = fs.readFileSync('./data/mymannequin.json').toString();
let mannequin = JSON.parse(mannequinString);

// route for HTTP GET requests to /MyMannequin
app.get("/my-mannequin", (req, res) => {
    res.send(mannequin);
})

/*AUTHENTICATION PAGE ROUTING*/

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



/*      JSON WEB TOKOENS    */
// the following are used for authentication with JSON Web Tokens
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const jwt = require("jsonwebtoken")
const passport = require("passport")
app.use(passport.initialize()) // tell express to use passport middleware

// load up some mock user data in an array... this would normally come from a database
const users = require("./user_data.js")

// use this JWT strategy within passport for authentication handling
const { jwtOptions, jwtStrategy } = require("./jwt-config.js") // import setup options for using JWT in passport
passport.use(jwtStrategy)




  // export express app to make it available to other modules
module.exports = app 