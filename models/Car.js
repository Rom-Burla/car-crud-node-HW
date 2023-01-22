const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  timeFromZeroToHundred: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
  description: { type: String, required: true },
  inventory: { type: Number, required: true },
});

const Car = mongoose.model("Car", carSchema, "Cars");

module.exports = Car;
