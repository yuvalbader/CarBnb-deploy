const { Op } = require("sequelize")
const { Car, Reservation } = require("../db/models")
const reservation = require("./reservation")

class UtilsService {
  constructor() {}

  getAvailableCars = async (search) => {
    const { start_order, end_order, location } = search
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
    })
    const unAvailableCars = booking.map((x) => x.car_id)
    console.log(booking, "booking")
    const findall = await Car.findAll({
      where: {
        id: { [Op.notIn]: unAvailableCars },
        location: { [Op.like]: "%" + location + "%" },
      },
    })
  }

  // getCarsToPresent = async () => {
  //   const today = new Date(); //Today's Date
  //   const requiredDate = (n) => {
  //     return new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + n
  //     );
  //   };
  //   console.log(today,requiredDate(3));
  //   let dates = { start_order:today, end_order:requiredDate, location:"" }
  //   let cars = this.getAvailableCars (dates);

  // };
}

module.exports = new UtilsService()
