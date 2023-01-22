const { Router } = require("express");
const router = Router();
// require controller functions
const carController = require("../controllers/carController");

// Read - localhost:3000/cars - GET request
router.get("/", carController.car_read);

// Create - localhost:3000/cars - POST request
router.post("/", carController.car_post);

//Update - localhost:3000/cars/:id - PUT request
router.put("/:id", carController.car_update);

// Delete - localhost:3000/cars/:id - DELETE request
router.delete("/:id", carController.car_delete);

// Reset - localhost:3000/cars/init - POST request
router.post("/init", carController.car_init);

// Buy - localhost:3000/cars/:id/buy - PUT request
router.put("/:id/buy", carController.car_buy);

// Read - by id localhost:3000/cars/:id - GET request
router.get("/:id", carController.car_read_by_id);

module.exports = router;
