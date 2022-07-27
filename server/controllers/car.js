const CarsService = require("../services/car");

const getAllCars = async (req, res, next) => {
  try {
    const cars = await CarsService.getAllCars();
    if (!cars) {
      throw new Error("Cars not found");
    }
    return res.status(200).send(cars);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getBrands = async (req, res, next) => {
  try {
    console.log("got to get brands controller");
    const brands = await CarsService.getBrands();
    if (!brands) {
      throw new Error("Brands not found");
    }
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getCarById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await CarsService.getCarById(id);
    if (!car) {
      throw new Error("Car not found");
    }
    return res.status(200).send(car);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getCarsByUserId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const cars = await CarsService.getCarByUserId(id);
    if (!cars) {
      throw new Error("Cars not found");
    }
    return res.status(200).send(cars);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const addCar = async (req, res, next) => {
  const newCar = req.body;
  console.log("got to add car controller: ", req.body);
  try {
    const car = await CarsService.addCar(newCar);
    if (!car) {
      throw new Error("Car not added");
    }
    return res.status(200).send("Car has been successfully added");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const updateCar = async (req, res, next) => {
  const id = req.params.id;
  const updateCar = req.body;
  try {
    const car = await CarsService.updateCar(id, updateCar);
    if (!car) {
      throw new Error("Unable to update car");
    }
    return res.status(200).send("Car has been successfully updated");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const deleteCar = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await CarsService.deleteCar(id);

    if (!car) {
      throw new Error(`Unable to delete car with id: ${id}`);
    }
    return res.status(200).send("Car has been successfully deleted");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const deleteAllCars = async (req, res, next) => {
  try {
    const cars = await CarsService.deleteAllCars();
    if (!cars) {
      throw new Error("Unable to delete all cars");
    }
    return res.status(200).send("Cars has been successfully deleted");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

module.exports = {
  getAllCars,
  getCarById,
  getCarsByUserId,
  getBrands,
  addCar,
  updateCar,
  deleteCar,
  deleteAllCars,
};
