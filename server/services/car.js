const { Car } = require("../db/models");

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

  addCar = async ({
    profile_picture,
    brand,
    model,
    year,
    number_of_seats,
    price_per_day,
    description,
    user_id,
    type,
    location,
    engine,
    gear,
    gas,
  }) => {
    return await Car.create({
      profile_picture,
      brand,
      model,
      year,
      number_of_seats,
      price_per_day,
      description,
      user_id,
      type,
      location,
      engine,
      gear,
      gas,
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
