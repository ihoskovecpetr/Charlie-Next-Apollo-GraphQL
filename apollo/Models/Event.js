const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String },
  geometry: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
  },
  addressGoogle: { type: String }, //Address..
  addressCustom: { type: String },
  eventType: { type: Number },
  dateStart: { type: Date },
  dateEnd: { type: Date },
  price: { type: Number },
  capacityMax: { type: Number },
  BYO: { type: Boolean },
  repeatWeek: { type: Boolean },
  freeSnack: { type: Boolean },
  freeBeer: { type: Boolean },
  freeMeal: { type: Boolean },
  imagesArr: { type: Array },
  description: { type: String },
  confirmed: { type: Boolean },
  hide: { type: Boolean }
});

module.exports = mongoose.model("Event", EventSchema);
