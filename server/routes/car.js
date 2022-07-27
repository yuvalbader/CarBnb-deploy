const carRouter = require("express").Router();

const {
  getAllCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  deleteAllCars,
  getCarsByUserId,
  getBrands,
} = require("../controllers/car");

carRouter.get("/", getAllCars);
carRouter.get("/user/:id", getCarsByUserId);
carRouter.get("/brands", getBrands);
carRouter.get("/:id", getCarById);
carRouter.post("/", addCar);
carRouter.put("/:id", updateCar);
carRouter.delete("/:id", deleteCar);
carRouter.delete("/deleteAll", deleteAllCars);

module.exports = carRouter;
