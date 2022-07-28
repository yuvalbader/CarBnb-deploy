const { Car } = require('../db/models');

class CarsService {
  constructor() {}

  carsImgs = [
    {
      tesla:
        "https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg",
    },
    {
      jeep: "https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg",
    },
  ];

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
    return await Car.create({
      profile_piture: car.profile_piture,
      brand: car.brand,
      model: car.model,
      year: car.year,
      number_of_seats: car.number_of_seats,
      price_per_day: car.price_per_day,
      description: car.description,
      user_id: car.user_id,
      type: car.type,
      location: car.location,
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

  getBrands = async () => {
    return await Car.findAll({
      attributes: ["brand"],
      group: ["brand"],
    });
  };
}

module.exports = new CarsService();
