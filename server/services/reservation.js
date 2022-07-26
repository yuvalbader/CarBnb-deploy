const { Reservation } = require("../db/models");

class ReservationService {
  getAllReservations = async () => {
    return await Reservation.findAll();
  };

  getReservationsByOwnerId = async (ownerId) => {
   // get all reservation of an owner by ownerId.
   

 
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
}

module.exports = new ReservationService();
