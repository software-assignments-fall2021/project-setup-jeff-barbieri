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
    size: {type: Number,
        min: 0,
        max: 4}, //store clothing sizes as integer values, we can decide how many later
    source: String, //image URL
    alt: String, //alt text for image
    inCloset: Boolean //store if article is in closet
})

//schema for outfit values
const Outfits = new Schema({
    //outfits will be array of clothing items (array of arrays)
    outfits: [[]]
})