const mongoose = require("mongoose");
const Car = require("../models/Car");
const fs = require("fs");

// Reset DB
const car_init = async (req, res) => {
  await Car.collection.drop();

  fs.readFile("./models/cars.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.json("Fail");
      return;
    }

    const carJson = JSON.parse(data);
    carJson.cars.forEach((car) => {
      new Car(car).save();
    });
    res.json("Success");
  });
};

// Post new car
const car_post = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.json(car);
  } catch (err) {
    console.log(err);
  }
};

// Buy a car
const car_buy = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const car = await Car.findById(id);
    if (car.inventory === 0) {
      car.inventory = car.inventory - 1;
      const updatedCar = await Car.findByIdAndUpdate(id, car);
      res.json(updatedCar);
    } else {
      res.status(409).send("no inventory for car", car.manufacturer, car.model);
    }
  } catch (err) {
    console.log(err);
  }
};

// Update existing car object
const car_update = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  try {
    await Car.findByIdAndUpdate(id, req.body);
    const updatedCar = await Car.findById(id);
    res.json(updatedCar);
  } catch (err) {
    console.log(err);
  }
};

// Show cars in db
const car_read = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    console.log(err);
  }
};

// Show specific cars by id
const car_read_by_id = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  try {
    const car = Car.findById(id);
    res.json(car);
  } catch (err) {
    console.log(err);
  }
};

// Delete car
const car_delete = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  try {
    await Car.findByIdAndDelete(id);
    res.send("car" + id + "deleted");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  car_init,
  car_buy,
  car_update,
  car_read,
  car_delete,
  car_read_by_id,
  car_post,
};
