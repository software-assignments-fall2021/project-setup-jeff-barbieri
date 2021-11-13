//filler schema for database implementation
const closet = new Schema(
    {
      name: String,
      type: String,
      size: {type: Number,
        min: 0,
        max: 4}, //store clothing sizes as integer values
      source: String,
      alt: String
    })