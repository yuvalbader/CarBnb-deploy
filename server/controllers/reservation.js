const reservationService = require("../services/reservation");

const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await reservationService.getAllReservations();
    if (!reservations) {
      throw new Error("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getReservationsByOwnerId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservations = await reservationService.getReservationsByOwnerId(id);
    if (!reservations) {
      throw new Error("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getReservationsByCustomerId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservations = await reservationService.getReservationsByCustomerId(
      id
    );
    if (!reservations) {
      throw new Error("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getReservationById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservation = await reservationService.getReservationById(id);
    if (!reservation) {
      throw new Error("Reservation not found");
    }
    return res.status(200).send(reservation);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const createReservation = async (req, res, next) => {
  const newReservation = req.body;
  try {
    await reservationService.createReservation(newReservation);
    return res.status(200).send("Reservation has been successfully added");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const updateReservation = async (req, res, next) => {
  const id = req.params.id;
  const updatedReservation = req.body;
  try {
    const reservation = await reservationService.updateReservation(
      id,
      updatedReservation
    );
    if (!reservation) {
      throw new Error("Reservation not found");
    }
    return res.status(200).send("Reservation has been successfully updated");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const deleteReservation = async (req, res, next) => {
  const id = req.params.id;
  try {
    await reservationService.deleteReservation(id);
    return res.status(200).send("Reservation has been successfully deleted");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const deleteAllReservations = async (req, res, next) => {
  try {
    await reservationService.deleteAllReservations();
    return res.status(200).send("All reservations has been successfully deleted");
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

module.exports = {
  getAllReservations,
  getReservationsByOwnerId,
  getReservationsByCustomerId,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  deleteAllReservations,
};
