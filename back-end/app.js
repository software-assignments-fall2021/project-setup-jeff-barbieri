<<<<<<< HEAD
// // import and instantiate express
// const express = require("express"); // CommonJS import style!
// const app = express(); // instantiate an Express object
// const path = require("path");

// //DOTENV
// const dotenv = require("dotenv");
// dotenv.config();


// // import some useful middleware
// const multer = require("multer"); // middleware to handle HTTP POST requests with file uploads
// const axios = require("axios"); // middleware for making requests to APIs
// require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
// const morgan = require("morgan"); // middleware for nice logging of incoming HTTP requests

// // use the morgan middleware to log all incoming http requests
// app.use(morgan("dev")); // morgan has a few logging default styles - dev is a nice concise color-coded style

// // use express's builtin body-parser middleware to parse any data included in a request
// app.use(express.json()); // decode JSON-formatted incoming POST data
// app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// // import fs to read json files
// 'use strict';
// const fs = require('fs');

// //import mongoose module
// const mongoose = require('mongoose');

// //import schema models
// const Schema = mongoose.Schema;

// //schema for clothing values
// const Clothing = new Schema({
//   name: String, //name of clothing article
//   type: String, //clothing type, maybe replace with int later?
//   size: String, //decided not to enumerate size
//   source: String, //image URL
//   alt: String //alt text for image
// },
// { collection : 'apparel' })

// //schema for each category of clothing

// //schema for clothing tops
// const Tops = new Schema({
//   name: String,
//   type: String,
//   size: String,
//   color: String,
//   length: Number,
//   width: Number,
//   sleeve: Number,
//   source: String
// },
// { collection : 'apparel' })

// //schema for clothing bottoms
// const Bottoms = new Schema({
//   name: String,
//   type: String,
//   size: String,
//   color: String,
//   waist: Number,
//   rise: Number,
//   inseam: Number,
//   source: String
// },
// { collection : 'apparel' })

// //schema for footwear
// const Footwear = new Schema({
//   name: String,
//   type: String,
//   size: Number,
//   color: String,
//   insole: Number,
//   width: Number,
//   source: String
// },
// { collection : 'apparel' })

// //schema for accessories
// //NOTE: this is the most arbitrary category, so this may be revised
// const Accessories = new Schema({
//   name: String,
//   type: String,
//   size: String,
//   color: String,
//   length: Number,
//   width: Number,
//   source: String
// },
// { collection : 'apparel' })

// //schema for closet values
// const Closet = new Schema({
//   //all entries should be arrays of each clothing element type
//   tops: [],
//   bottoms: [],
//   footwear: [],
//   accessories: []
// },
// { collection : 'apparel' })

// //schema for mannequin values
// const Mannequin = new Schema({
//   sex: Boolean, //I believe our visualizer only supports M/F, but this can be updated
//   height: Number,
//   shirt: Number,
//   pants: Number,
//   jacket: Number,
//   waist: Number,
//   weight: Number,
//   body: Number
// },
// { collection : 'apparel' })

// //schema for user authentication values
// const Login = new Schema({
//   username: String,
//   // email: String, not sure if our login includes email address
//   password: String //this will have to be encrypted in our .env file
// },
// { collection : 'apparel' })

// //schema for try on values
// const TryOn = new Schema({
//   name: String, //name of clothing article
//   type: String, //clothing type, maybe replace with int later?
//   size: String,
//   source: String, //image URL
//   alt: String, //alt text for image
//   inCloset: Boolean //store if article is in closet
// },
// { collection : 'apparel' })

// //schema for outfit values
// const Outfits = new Schema({
//   //outfits will be array of clothing items (array of arrays)
//   outfits: [[]]
// },
// { collection : 'apparel' })

// // environment variables for mongodb
// const username = process.env.USERNAME;
// const password = process.env.PASSWORD;


// //set up mongoose connection
// const mongoDB = `mongodb+srv://${username}:${password}@cluster0.4ofnm.mongodb.net/user?retryWrites=true&w=majority`;
// mongoose.connect( mongoDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(()=>{
//   console.log("Database connected");
// }).catch(err=>{
//   console.log(`Database not connected: ${err}`);
// });

// // get the connection
// const db = mongoose.connection;

// //attach connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // test
// app.get("/", (req, res) => {
//   res.send("Hello world!")
// })

// //this is an abstraction of searching the database, in which you can pass in:
// //name = collection name
// //query = query value
// //cb = callback function
// function find (name, query, cb) {
//   mongoose.connection.db.collection(name, function (err, collection) {
//      collection.find(query).toArray(cb);
//  });
// } //not in use yet, just thought it might be useful if we have trouble

// // -----------------------------------------------------------
// /* MY CLOSET */
// // read mycloset.json
// let closetString = fs.readFileSync('./data/mycloset.json').toString();
// let closet = JSON.parse(closetString);

// // route for HTTP GET requests to /MyCloset
// app.get("/my-closet", (req, res) => {
//     res.json(closet)
// })

// //mongoose query for my closet
// /* const ClosetInstance = mongoose.model('MyCloset', Closet);
// app.get('/find/:my-closet', cors(), function(req, res) {
//   let query = req.params.query;

//   ClosetInstance.find({
//       'tops': query,
//       'bottoms': query,
//       'footwear': query,
//       'accessories': query
//     }, 
//     function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result)
//       } else {
//           res.send(JSON.stringify({
//               error : 'Error'
//           }))
//       }å
//   })
// })  */

// // -----------------------------------------------------------
// /*MY OUTFITS*/
// // read myoutfits.json
// let outfitsString = fs.readFileSync('./data/myoutfits.json').toString();
// let outfits = JSON.parse(outfitsString);

// // route for HTTP GET requests to /MyOutfits
// app.get("/my-outfits", (req, res) => {
//     res.send(outfits);
// })

// //mongoose query for my outfits
// /* const OutfitsInstance = mongoose.model('MyOutfits', Outfits);
// app.get('/find/:my-outfits', cors(), function(req, res) {
//   let query = req.params.query;

//   OutfitsInstance.find({
//       'outfits': query,
//     }, 
//     function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result)
//       } else {
//           res.send(JSON.stringify({
//               error : 'Error'
//           }))
//       }
//   })
// })  */

// // -----------------------------------------------------------
// /*TRY ON*/

// // read tryon.json
// let tryonString = fs.readFileSync('./data/tryon.json').toString();
// let tryon = JSON.parse(tryonString);

// // route for HTTP GET requests to /TryOn
// app.get("/try-on", (req, res) => {
//     res.send(tryon);
// })

// //mongoose query for try on
// /* const TryOnInstance = mongoose.model('TryOn', TryOn);
// app.get('/find/:try-on', cors(), function(req, res) {
//   let query = req.params.query;

//   TryOnInstance.find({
//       'name': query, 
//       'type': query, 
//       'size': query,
//       'source': query, 
//       'alt': query, 
//       'inCloset': query 
//     }, 
//     function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result)
//       } else {
//           res.send(JSON.stringify({
//               error : 'Error'
//           }))
//       }
//   })
// })  */

// // -----------------------------------------------------------
// /*MY MANNEQUIN*/

// // read mymannequin.json
// let mannequinString = fs.readFileSync('./data/mymannequin.json').toString();
// let mannequin = JSON.parse(mannequinString);

// // route for HTTP GET requests to /MyMannequin
// app.get("/my-mannequin", (req, res) => {
//     res.send(mannequin);
// })

// //mongoose query for my mannequin
// /* const MannequinInstance = mongoose.model('MyMannequin', Mannequin);
// app.get('/find/:my-mannequin', cors(), function(req, res) {
//   let query = req.params.query;

//   MannequinInstance.find({
//       'sex': query, 
//       'height': query,
//       'shirt': query,
//       'pants': query,
//       'jacket': query,
//       'waist': query,
//       'weight': query,
//       'body': query
//     }, 
//     function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result)
//       } else {
//           res.send(JSON.stringify({
//               error : 'Error'
//           }))
//       }
//   })
// })  */

// /*AUTHENTICATION PAGE ROUTING*/

// // route for HTTP GET requests to /Login
// app.get("/login", (req, res) => {
//     // send the response as JSON to the client
//     res.sendFile("/login.html")
// })

// // route for HTTP GET requests to /Register
// app.get("/register", (req, res) => {
//     // send the response as JSON to the client
//     res.sendFile("/register.html")
// })

// // enable file uploads saved to disk in a directory named 'public/uploads'
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "public/uploads")
//     },
//     filename: function (req, file, cb) {
//       // take apart the uploaded file's name so we can create a new one based on it
//       const extension = path.extname(file.originalname)
//       const basenameWithoutExtension = path.basename(file.originalname, extension)
//       // create a new filename with a timestamp in the middle
//       const newName = `${basenameWithoutExtension}-${Date.now()}${extension}`
//       // tell multer to use this new filename for the uploaded file
//       cb(null, newName)
//     },
//   })
//   const upload = multer({ storage: storage })



// /*      JSON WEB TOKOENS    */

// // the following are used for authentication with JSON Web Tokens
// const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
// const jwt = require("jsonwebtoken")
// const passport = require("passport")
// app.use(passport.initialize()) // tell express to use passport middleware

// // load up some mock user data in an array... this would normally come from a database
// const users = require("./user_data.js")

// // use this JWT strategy within passport for authentication handling
// const { jwtOptions, jwtStrategy } = require("./jwt-config.js") // import setup options for using JWT in passport
// passport.use(jwtStrategy)










//   // export express app to make it available to other modules
// module.exports = {
//   app : app,
//   mongoDB : mongoDB
// }
=======
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

//import schema models
const Schema = mongoose.Schema;

//schema for clothing values
const Clothing = new Schema({
  name: String, //name of clothing article
  type: String, //clothing type, maybe replace with int later?
  size: String, //decided not to enumerate size
  source: String, //image URL
  alt: String //alt text for image
})

//schema for each category of clothing

//schema for clothing tops
const Tops = new Schema({
  name: String,
  type: String,
  size: String,
  color: String,
  length: Number,
  width: Number,
  sleeve: Number,
  source: String
})

//schema for clothing bottoms
const Bottoms = new Schema({
  name: String,
  type: String,
  size: String,
  color: String,
  waist: Number,
  rise: Number,
  inseam: Number,
  source: String
})

//schema for footwear
const Footwear = new Schema({
  name: String,
  type: String,
  size: Number,
  color: String,
  insole: Number,
  width: Number,
  source: String
})

//schema for accessories
//NOTE: this is the most arbitrary category, so this may be revised
const Accessories = new Schema({
  name: String,
  type: String,
  size: String,
  color: String,
  length: Number,
  width: Number,
  source: String
})

//schema for closet values
const Closet = new Schema({
  //all entries should be arrays of each clothing element type
  tops: [],
  bottoms: [],
  footwear: [],
  accessories: []
})

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

//schema for user authentication values
const Login = new Schema({
  username: String,
  // email: String, not sure if our login includes email address
  password: String //this will have to be encrypted in our .env file
})

//schema for try on values
const TryOn = new Schema({
  name: String, //name of clothing article
  type: String, //clothing type, maybe replace with int later?
  size: String,
  source: String, //image URL
  alt: String, //alt text for image
  inCloset: Boolean //store if article is in closet
})

//schema for outfit values
const Outfits = new Schema({
  //outfits will be array of clothing items (array of arrays)
  outfits: [[]]
})

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
    //const closetInstance = new Closet(closet);
})
// -----------------------------------------------------------
/*MY OUTFITS*/
// read myoutfits.json
let outfitsString = fs.readFileSync('./data/myoutfits.json').toString();
let outfits = JSON.parse(outfitsString);

// route for HTTP GET requests to /MyOutfits
app.get("/my-outfits", (req, res) => {
    res.send(outfits);
    //const outfitsInstance = new Outfits(outfits);
})

// -----------------------------------------------------------
/*TRY ON*/

// read tryon.json
let tryonString = fs.readFileSync('./data/tryon.json').toString();
let tryon = JSON.parse(tryonString);

// route for HTTP GET requests to /TryOn
app.get("/try-on", (req, res) => {
    res.send(tryon);
    //const tryonInstance = new TryOn(tryon);
})

// -----------------------------------------------------------
/*MY MANNEQUIN*/

// read mymannequin.json
let mannequinString = fs.readFileSync('./data/mymannequin.json').toString();
let mannequin = JSON.parse(mannequinString);

// route for HTTP GET requests to /MyMannequin
app.get("/my-mannequin", (req, res) => {
    res.send(mannequin);
    //const mannequinInstance = new Mannequin(mannequin);
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
>>>>>>> origin/sprint-3
