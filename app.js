// package requires + app initiation
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// routes require
const carRoutes = require("./routes/carRoutes");

// middleware
app.use(express.json());

// Db connection
mongoose.set("strictQuery", false);
const dbURI = "mongodb://127.0.0.1:27017/carsHW";
mongoose
  .connect(dbURI)
  .then((db) => {
    app.listen(3000, () => {
      console.log("connected to db");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// use routes
app.use("/cars", carRoutes);
