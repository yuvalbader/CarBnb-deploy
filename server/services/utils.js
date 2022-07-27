const { Op } = require("sequelize");
const { Car, Reservation } = require("../db/models");

class UtilsService {
  constructor() {}

  getAvailableCars = async (search) => {
    const { start_order, end_order, location } = search;
    console.log(start_order, end_order);
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
    return await Car.findAll({
      where: {
        id: { [Op.notIn]: unAvailableCars },
        location: { [Op.like]: "%" + location + "%" },
      },
    });
  };
}

module.exports = new UtilsService();
