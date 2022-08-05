const { Op } = require("sequelize")
const { Reservation } = require("../db/models")

class ReservationService {
  getAllReservations = async () => {
    return await Reservation.findAll()
  }

  getReservationsByCarId = async (carId) => {
    return Reservation.findAll({
      where: {
        car_id: carId,
      },
    })
  }

  getReservationsByCustomerId = async (customerId) => {
    return Reservation.findAll({
      where: {
        user_id: customerId,
      },
    })
  }

  getReservationById = async (reservationId) => {
    return Reservation.findByPk(reservationId)
  }

  createReservation = async (reservation) => {
    const startTime = new Date(
      parseInt(reservation.start_order.split("T")[0].split("-")[0]),
      parseInt(reservation.start_order.split("T")[0].split("-")[1]) - 1,
      parseInt(reservation.start_order.split("T")[0].split("-")[2]),
      parseInt(reservation.start_time.split(":")[0]) + 3,
      parseInt(reservation.start_time.split(":")[1])
    )
    const endTime = new Date(
      parseInt(reservation.end_order.split("T")[0].split("-")[0]),
      parseInt(reservation.end_order.split("T")[0].split("-")[1]) - 1,
      parseInt(reservation.end_order.split("T")[0].split("-")[2]),
      parseInt(reservation.end_time.split(":")[0]) + 3,
      parseInt(reservation.end_time.split(":")[1])
    )
    const startOrder = new Date(reservation.start_order)
    const endOrder = new Date(reservation.end_order)
    const startOrderNew = new Date(startOrder.setDate(startOrder.getDate() + 1))
    const endOrderNew = new Date(endOrder.setDate(endOrder.getDate() + 1))
    const start = new Date(startTime.setDate(startTime.getDate() + 1))
    const end = new Date(endTime.setDate(endTime.getDate() + 1))

    return await Reservation.create({
      start_date: startOrderNew,
      end_date: endOrderNew,
      total_price: reservation.total_price,
      start_time: start,
      end_time: end,
      user_id: reservation.user_id,
      car_id: reservation.car_id,
    })
  }

  updateReservation = async (id, updatedReservation) => {
    return await Reservation.update(updatedReservation, {
      where: { id: id },
    })
  }

  deleteReservation = async (reservationId) => {
    return await Reservation.destroy({
      where: { id: reservationId },
    })
  }

  deleteAllReservations = async () => {
    return await Reservation.destroy({
      where: {},
      truncate: true,
    })
  }

  isCarAvailable = async (data) => {
    const car_id = data.car_id
    const start_order = new Date(data.start_order)
    const end_order = new Date(data.end_order)
    const start = new Date(start_order.setDate(start_order.getDate() + 1))
    const end = new Date(end_order.setDate(end_order.getDate() + 1))
    const reserved = await Reservation.findAll({
      where: {
        car_id: car_id,

        [Op.or]: [
          { end_date: { [Op.between]: [start, end] } },
          { start_date: { [Op.between]: [start, end] } },
          {
            [Op.and]: [
              { start_date: { [Op.lt]: start } },
              { end_date: { [Op.gt]: end } },
            ],
          },
        ],
      },
    })
    return reserved.length == 0
  }
}
module.exports = new ReservationService()
