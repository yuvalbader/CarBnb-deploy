const { Op } = require("sequelize");
const { Reservation } = require("../db/models");

class ReservationService {
  getAllReservations = async () => {
    return await Reservation.findAll();
  };

  getReservationsByOwnerId = async (ownerId) => {
    return Reservation.findAll({
      where: {
        car_id: ownerId,
      },
    });
  };

  getReservationsByCustomerId = async (customerId) => {
    return Reservation.findAll({
      where: {
        user_id: customerId,
      },
    });
  };

  getReservationById = async (reservationId) => {
    return Reservation.findByPk(reservationId);
  };

  createReservation = async (reservation) => {
    return await Reservation.create({
      start_date: reservation.start_date,
      end_date: reservation.end_date,
      total_price: reservation.total_price,
      start_time: reservation.start_time,
      end_time: reservation.end_time,
      user_id: reservation.user_id,
      car_id: reservation.car_id,
    });
  };

  updateReservation = async (id, updatedReservation) => {
    return await Reservation.update(updatedReservation, {
      where: { id: id },
    });
  };

  deleteReservation = async (reservationId) => {
    return await Reservation.destroy({
      where: { id: reservationId },
    });
  };

  deleteAllReservations = async () => {
    return await Reservation.destroy({
      where: {},
      truncate: true,
    });
  };

  isCarAvailable = async (data) => {
    const { id, details } = data;
    const { start_order, end_order } = details;
    const reserved = await Reservation.findAll({
      where: {
        car_id: id,
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
    return reserved.length == 0;
  };
}
module.exports = new ReservationService();
