const { Car } = require("../db/models")
class CarsService {
  constructor() {}

  getAllCars = async () => {
    return await Car.findAll()
  }

  getCarById = async (carId) => {}

  getCarByUserId = async (userId) => {}

  addCar = async (car) => {}

  updateCar = async (id, updateCar) => {}

  deleteCar = async (carId) => {}

  deleteAllCars = async () => {}
}

module.exports = new CarsService()
