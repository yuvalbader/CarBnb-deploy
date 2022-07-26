const { Car } = require('../db/models');

class CarsService {
  constructor() {}

  getAllCars = async () => {
    return await Car.findAll();
  };

  getCarById = async (carId) => {
    return await Car.findByPk(carId);
  };

  getCarByUserId = async (userId) => {
    return await Car.findAll({
      where: {
        user_id: userId,
      },
    });
  };

  addCar = async (car) => {
    console.log('got to add car service:', car);
    return await Car.create({
      profile_piture: car.profile_piture,
      brand: car.brand,
      model: car.model,
      year: car.year,
      number_of_seats: car.number_of_seats,
      price_per_day: car.price_per_day,
      description: car.description,
      user_id: car.user_id,
    });
  };

  updateCar = async (id, updateCar) => {
    return await Car.update(updateCar, {
      where: { id: id },
    });
  };

  deleteCar = async (carId) => {
    return await Car.destroy({
      where: { id: carId },
    });
  };

  deleteAllCars = async () => {
    return await Car.destroy({
      where: {},
      truncate: true,
    });
  };
}

module.exports = new CarsService();
