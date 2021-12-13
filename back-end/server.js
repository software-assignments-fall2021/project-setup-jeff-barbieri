#!/usr/bin/env node
const express = require('express')
const app = express()
// we dont need this
//const server = require("./app") // load up the web server
//-----------------------------------------------------
// import routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

//DOTENV
const dotenv = require("dotenv");
dotenv.config();

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

//import schema models
const Schema = mongoose.Schema;

//schema for clothing values
const Clothing = new Schema({
  category: String,
  name: String, //name of clothing article
  type: String, //clothing type, maybe replace with int later?
  size: String, //decided not to enumerate size
  source: String, //image URL
  alt: String //alt text for image
}
) //,{ collection : 'apparel' }

//schema for each category of clothing

//schema for clothing tops
const Tops = new Schema({
  category: String,
  name: String,
  type: String,
  size: String,
  color: String,
  length: Number,
  width: Number,
  sleeve: Number,
  source: String
})
 //,{ collection : 'apparel' }

//schema for clothing bottoms
const Bottoms = new Schema({
  category: String,
  name: String,
  type: String,
  size: String,
  color: String,
  waist: Number,
  rise: Number,
  inseam: Number,
  source: String
})
//,{ collection : 'apparel' }

//schema for footwear
const Footwear = new Schema({
  category: String,
  name: String,
  type: String,
  size: Number,
  color: String,
  insole: Number,
  width: Number,
  source: String
})
//,{ collection : 'apparel' }

//schema for accessories
//NOTE: this is the most arbitrary category, so this may be revised
const Accessories = new Schema({
  category: String,
  name: String,
  type: String,
  size: String,
  color: String,
  length: Number,
  width: Number,
  source: String
})
//,{ collection : 'apparel' }

//schema for closet values
const Closet = new Schema({
  //all entries should be arrays of each clothing element type
  tops: [],
  bottoms: [],
  footwear: [],
  accessories: []
})
//,{ collection : 'apparel' }

//schema for mannequin values
const Mannequin = new Schema({
  sex: Boolean, //I believe our visualizer only supports M/F, but this can be updated
  height: Number,
  shirt: Number,
  pants: Number,
  jacket: Number,
  waist: Number,
  weight: Number,
  body: Number
})
//,{ collection : 'apparel' }

//schema for user authentication values
// const Login = new Schema({
//   username: String,
//   // email: String, not sure if our login includes email address
//   password: String //this will have to be encrypted in our .env file
// })
//,{ collection : 'apparel' }

//schema for try on values
const TryOn = new Schema({
  name: String, //name of clothing article
  type: String, //clothing type, maybe replace with int later?
  size: String,
  source: String, //image URL
  alt: String, //alt text for image
  inCloset: Boolean //store if article is in closet
})
//,{ collection : 'apparel' }

//schema for outfit values
const Outfits = new Schema({
  //outfits will be array of clothing items (array of arrays)
  outfits: [[]]
})
//,{ collection : 'apparel' }

// environment variables for mongodb
const username = process.env.USERNAME.toLowerCase();
const password = process.env.PASSWORD;

//set up mongoose connection
const mongoDB = `mongodb+srv://${username}:${password}@cluster0.4ofnm.mongodb.net/user?retryWrites=true&w=majority`;
mongoose.connect( mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Database connected");
}).catch(err=>{
  console.log(`Database not connected: ${err}`);
});

// get the connection
const db = mongoose.connection;

//attach connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// test
app.get("/", (req, res) => {
  res.send("Hello world!")
})

// -----------------------------------------------------------
/* BRIAN: temporary LOCAL apparel data this should be replaced
with database api */

/* APPAREL DATA */
// read apparel.json
    /*
let apparelString = fs.readFileSync('./data/apparel.json').toString();
let apparel = JSON.parse(apparelString);

// route for HTTP GET requests to /MyCloset
app.get("/apparel", (req, res) => {
    res.json(apparel)
})- */

//mongoose queries for each apparel type

//get all tops
const TopsInstance = mongoose.model('Tops', Tops);
app.get('/apparel/apparel-data', (req, res) => {

  //return all tops
  TopsInstance.find( {category : { $eq: Tops }} ).then( (tops) => { 
    res.json(tops)
  } ).catch((err) => {res.send('Error')})

})  
//get all bottoms
const BottomsInstance = mongoose.model('Bottoms', Bottoms);
app.get('/apparel/apparel-data', (req, res) => {

  //return all bottoms
  BottomsInstance.find( {category: { $eq: Bottoms }} ).then( (bottoms) => { 
    res.json(bottoms)
  } ).catch((err) => {res.send('Error')})

})  
//get all footwear
const FootwearInstance = mongoose.model('Footwear', Footwear);
app.get('/apparel/apparel-data', (req, res) => {

  //return all footwear
  FootwearInstance.find( {category: { $eq: Footwear }} ).then( (footwear) => { 
    res.json(footwear)
  } ).catch((err) => {res.send('Error')})

})  
//get all accessories
const AccessoriesInstance = mongoose.model('Accessories', Accessories);
app.get('/apparel/apparel-data', (req, res) => {

  //return all accessories
  AccessoriesInstance.find( {category: { $eq: Accessories }} ).then( (accessories) => { 
    res.json(accessories)
  } ).catch((err) => {res.send('Error')})

})  

// -----------------------------------------------------------

// -----------------------------------------------------------
/* MY CLOSET */
// read mycloset.json
    /*
let closetString = fs.readFileSync('./data/mycloset.json').toString();
let closet = JSON.parse(closetString);

// route for HTTP GET requests to /MyCloset
app.get("/my-closet", (req, res) => {
    res.json(closet)
})  */


//mongoose query for my closet
const ClosetInstance = mongoose.model('MyCloset', Closet);
let closetString = ""
app.get('/closet', (req, res) => {

  //for closet, only return items in user's closet
  ClosetInstance.find({ inCloset: { $eq: true } }).then( (closetItem) => { 
    //res.json(closetItem)
    closetString += closetItem;
  } ).catch((err) => {res.send('Error')})

  let closet = JSON.parse(closetString)
  res.json(closet)
}) 

// -----------------------------------------------------------
/*MY OUTFITS*/
// read myoutfits.json
    /*
let outfitsString = fs.readFileSync('./data/myoutfits.json').toString();
let outfits = JSON.parse(outfitsString);

// route for HTTP GET requests to /MyOutfits
app.get("/my-outfits", (req, res) => {
    res.send(outfits);
})  */

//mongoose query for my outfits
const OutfitsInstance = mongoose.model('MyOutfits', Outfits);
let outfitsString = ""
app.get('/closet/outfits', (req, res) => {                      //NOTE: WE NEED TO CREATE OUTFITS COLLECTION, OR MAKE PART OF CLOSET

  OutfitsInstance.find().then( (outfit) => { 
    //res.json(outfit)
    outfitsString += outfit
  } ).catch((err) => {res.send('Error')})

  let outfits = JSON.parse(outfitsString)
  res.json(outfits)
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

//mongoose query for try on                                                 //WILL ADD THIS IF WE DECIDE TO SEPERATE IT FROM APPAREL
/* const TryOnInstance = mongoose.model('TryOn', TryOn);
app.get('/apparel', cors(), function(req, res) {
  //let query = req.params.query;

  TryOnInstance.find().then( (result) => { 
    res.json(result)
  } ).catch((err) => {res.send('Error')})
})  */

// -----------------------------------------------------------
/*MY MANNEQUIN*/

// read mymannequin.json
    /*
let mannequinString = fs.readFileSync('./data/mymannequin.json').toString();
let mannequin = JSON.parse(mannequinString);

// route for HTTP GET requests to /MyMannequin
app.get("/my-mannequin", (req, res) => {
    res.send(mannequin);
})  */

//mongoose query for my mannequin
const MannequinInstance = mongoose.model('MyMannequin', Mannequin);
let mannequinString = ""
app.get('/mannequin', (req, res) => {                        //NOTE: WE NEED TO CREATE MANNEQUIN COLLECTION
  //let query = req.params.query;

  MannequinInstance.find().then( (thisMannequin) => { 
    //res.json(thisMannequin)
    mannequinString += thisMannequin
  } ).catch((err) => {res.send('Error')})

  let mannequin = JSON.parse(mannequinString)
  res.json(mannequin)
}) 

/*AUTHENTICATION PAGE ROUTING*/

// route for HTTP GET requests to /Login
app.get("/api/user/login", (req, res) => {
    // send the response as JSON to the client
    res.send(req.body)
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

/* POST REQUESTS */

//create user mannequin
app.post('/mannequin', (req, res) => {
  let mannequinData = new Mannequin(req.body);
  mannequinData.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

app.post('/closet/outfits', (req, res) => {                    //IF WE COMBINE OUTFITS AND CLOSET, THESE NEED TO LINK TO SAME DIRECTORY
  let outfitData = new Outfits(req.body);
  outfitData.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

app.post('/closet', (req, res) => {                    //IF WE COMBINE OUTFITS AND CLOSET, THESE NEED TO LINK TO SAME DIRECTORY
  let closetData = new Closet(req.body);
  closetData.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

//this is an abstraction of searching the database, in which you can pass in:
//name = collection name
//query = query value
//cb = callback function
function find (name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
     collection.find(query).toArray(cb);
 });
} //not in use yet, just thought it might be useful if we have trouble

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






// TODO <-- what is this TODO for? - Liv 
/* -------------------------------------------------------------------*/
// middlewares
app.use(express.json()); // for body parser

// // Retrieving mongoDB connection from App.js
// const mongoDB = server.mongoDB

console.log(mongoDB)

//route middlewares
app.use("/api/user", authRoutes)

/* -------------------------------------------------------------------*/

// this route is protected with token
app.use("/MyCloset", verifyToken, dashboardRoutes);

// create a static route that serves the front-end build code
app.use("/client", express.static("client"))

// Listen on port 5000
const lister = app.listen(5000, () => console.log("server is running..."));

// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}