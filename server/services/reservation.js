class ReservationService {
  getAllReservations = async () => {};

  getReservationsByOwnerId = async (ownerId) => {};

  getReservationsByCustomerId = async (customerId) => {};

  getReservationById = async (reservationId) => {};

  createReservation = async (reservation) => {};

  updateReservation = async (id, updatedReservation) => {};

  deleteReservation = async (reservationId) => {};

  deleteAllReservations = async () => {};
}

module.exports = new ReservationService();
