const carRouter = require("express").Router();

const {
  getAllCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  deleteAllCars,
  getCarsByUserId,
} = require("../controllers/car");

carRouter.get("/", getAllCars);
carRouter.get("/:id", getCarById);
carRouter.get("/user/:id", getCarsByUserId);
carRouter.post("/", addCar);
carRouter.put("/:id", updateCar);
carRouter.delete("/:id", deleteCar);
carRouter.delete("/deleteAll", deleteAllCars);

module.exports = carRouter;
