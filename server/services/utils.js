const { Op } = require("sequelize");
const { Car, Reservation, User } = require("../db/models");
const reservation = require("./reservation");

class UtilsService {
  constructor() {}

  getAvailableCars = async (search) => {
    const { start_order, end_order, location } = search;
    const booking = await Reservation.findAll({
      where: {
        [Op.or]: [
          { end_date: { [Op.between]: [start_order, end_order] } },
          { start_date: { [Op.between]: [start_order, end_order] } },
          {
            [Op.and]: [
              { start_date: { [Op.lt]: start_order } },
              { end_date: { [Op.gt]: end_order } },
            ],
          },
        ],
      },
    });
    const unAvailableCars = booking.map((x) => x.car_id);
    const findall = await Car.findAll({
      where: {
        id: { [Op.notIn]: unAvailableCars },
        location: { [Op.like]: "%" + location + "%" },
      },
    });
    return findall;
  };

  getMyOrders = async (userId) => {
    let myOreders = await Reservation.findAll({
      where: {
        user_id: userId,
      },
    });
    if (!myOreders) return [];
    const carsId = myOreders.map((res) => {
      return res.car_id;
    });
    const carsObj = await Car.findAll({
      where: {
        id: { [Op.in]: carsId },
      },
    });
    let carsOwners = carsObj.map((car) => {
      return car.user_id;
    });
    carsOwners = await User.findAll({
      where: {
        id: { [Op.in]: carsOwners },
      },
    });

    carsOwners = carsOwners.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
    console.log("carsObj:", carsObj);
    console.log("carsOwners:", carsOwners);

    let car_user = carsObj.reduce((acc, car) => {
      acc[car.id] = carsOwners[car.user_id];
      return acc;
    }, {});
    console.log("car_user:", car_user);

    myOreders = myOreders.map((res) => {
      const newRes = { ...res.dataValues };
      const { car_id } = newRes;
      const user = car_user[car_id];
      newRes["owner_first_name"] = user.first_name;
      newRes["owner_last_name"] = user.last_name;
      newRes["owner_profile_picture"] = user.profile_picture;
      return newRes;
    });
    return myOreders;
  };

  getMyReservations = async (userId) => {
    let myCars = await Car.findAll({
      where: {
        user_id: userId,
      },
    });
    if (!myCars) return [];
    myCars = myCars.map((carObj) => {
      return carObj.id;
    });
    let findAllRes = await Reservation.findAll({
      where: {
        car_id: { [Op.in]: myCars },
      },
    });

    const userToFetch = findAllRes.map((res) => {
      return res.user_id;
    });

    let userObjects = await User.findAll({
      where: {
        id: { [Op.in]: userToFetch },
      },
    });

    userObjects = userObjects.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    findAllRes = findAllRes.map((res) => {
      const newRes = { ...res.dataValues };
      const { user_id } = newRes;
      const user = userObjects[user_id];
      newRes["costumer_first_name"] = user.first_name;
      newRes["costumer_last_name"] = user.last_name;
      newRes["costumer_profile_picture"] = user.profile_picture;
      return newRes;
    });
    return findAllRes;
  };
}

module.exports = new UtilsService();
