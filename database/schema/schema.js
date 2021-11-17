//schema for clothing values
const clothing = new Schema({
      name: String, //name of clothing article
      type: String, //clothing type, maybe replace with int later?
      size: {type: Number,
        min: 0,
        max: 4}, //store clothing sizes as integer values, we can decide how many later
      source: String, //image URL
      alt: String //alt text for image
    })

//schema for closet values
const closet = new Schema({
        //all entries should be arrays of each clothing element type
        tops: [],
        bottoms: [],
        footwear: [],
        accessories: []
    })

//schema for mannequin values
const mannequin = new Schema({
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
const login = new Schema({
        username: String,
        password: String //this will have to be encrypted in our .env file
    })

//schema for try on values
const tryOn = new Schema({
    name: String, //name of clothing article
    type: String, //clothing type, maybe replace with int later?
    size: {type: Number,
        min: 0,
        max: 4}, //store clothing sizes as integer values, we can decide how many later
    source: String, //image URL
    alt: String, //alt text for image
    inCloset: Boolean //store if article is in closet
})

//schema for outfit values
const outfits = new Schema({
        //outfits will be array of clothing items (array of arrays)
        outfits: [[]]
    })