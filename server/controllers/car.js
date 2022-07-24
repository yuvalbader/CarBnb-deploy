const {
  getAllCars,
  getCarById,
  getCarByUserId,
  addCar,
  updateCar,
  deleteCar,
  deleteAllCars,
} = require("../services/car");

const getAllCars = async (req, res, next) => {
  try {
    const cars = await getAllCars();
    if (!cars) {
      return res.status(404).send("Cars not found");
    }
    return res.status(200).send(cars);
  } catch (err) {
    next(err);
  }
};

const getCarById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await getCarById(id);
    if (!car) {
      return res.status(404).send("Car not found");
    }
    return res.status(200).send(car);
  } catch (err) {
    next(err);
  }
};

const getCarsByUserId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const cars = await getCarByUserId(id);
    if (!cars) {
      return res.status(404).send("Cars not found");
    }
    return res.status(200).send(cars);
  } catch (err) {
    next(err);
  }
};

const addCar = async (req, res, next) => {
  const newCar = req.body;
  try {
    const car = await addCar(newCar);
    if (!car) {
      return res.status(404).send("Car not added");
    }
    return res.status(200).send("Car has been successfully added");
  } catch (err) {
    next(err);
  }
};

const updateCar = async (req, res, next) => {
  const id = req.params.id;
  const updateCar = req.body;
  try {
    const car = await updateCar(id, updateCar);
    if (!car) {
      return res.status(404).send("Car not updated");
    }
    return res.status(200).send("Car has been successfully updated");
  } catch (err) {
    next(err);
  }
};

const deleteCar = async (req, res, next) => {
  const id = req.params.id;
  try {
    const car = await deleteCar(id);
    if (!car) {
      return res.status(404).send("Car not deleted");
    }
    return res.status(200).send("Car has been successfully deleted");
  } catch (err) {
    next(err);
  }
};

const deleteAllCars = async (req, res, next) => {
  try {
    const cars = await deleteAllCars();
    if (!cars) {
      return res.status(404).send("Cars not deleted");
    }
    return res.status(200).send("Cars has been successfully deleted");
  } catch (err) {
    next(err);
  }
};
