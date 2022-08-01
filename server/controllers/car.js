const CarsService = require("../services/car")

const getAllCars = async (req, res, next) => {
  try {
    const cars = await CarsService.getAllCars()
    const randomCars = cars.sort(() => Math.random() - 0.5).slice(0, 5)
    console.log(randomCars, "randomCars")
    if (cars.length === 0) {
      throw new Error("Cars not found")
    }
    return res.status(200).send(randomCars)
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const getBrands = async (req, res, next) => {
  try {
    let brands = await CarsService.getBrands()
    if (brands.length === 0) {
      throw new Error("Brands not found")
    }
    brands = brands.map((a) => a.brand)
    return res.status(200).send(brands)
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const getCarById = async (req, res, next) => {
  const { id } = req.params
  try {
    const car = await CarsService.getCarById(id)
    if (!car) {
      throw new Error("Car not found")
    }
    return res.status(200).send(car)
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const getCarsByUserId = async (req, res, next) => {
  const { id } = req.params
  try {
    const cars = await CarsService.getCarByUserId(id)
    if (cars.length === 0) {
      throw new Error("Cars not found")
    }
    return res.status(200).send(cars)
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const addCar = async (req, res, next) => {
  const newCar = req.body
  try {
    const car = await CarsService.addCar(newCar)
    if (!car) {
      throw new Error("Car not added")
    }
    return res.status(200).send("Car has been successfully added")
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const updateCar = async (req, res, next) => {
  const { id } = req.params
  const updateCar = req.body
  try {
    const car = await CarsService.updateCar(id, updateCar)
    console.log(car)
    if (car[0] === 0) {
      throw new Error("Unable to update car")
    }
    return res.status(200).send("Car has been successfully updated")
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const deleteCar = async (req, res, next) => {
  const { id } = req.params
  try {
    await CarsService.deleteCar(id)
    return res.status(200).send("Car has been successfully deleted")
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const deleteAllCars = async (req, res, next) => {
  try {
    await CarsService.deleteAllCars()
    return res.status(200).send("Cars has been successfully deleted")
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

module.exports = {
  getAllCars,
  getCarById,
  getCarsByUserId,
  getBrands,
  addCar,
  updateCar,
  deleteCar,
  deleteAllCars,
}
