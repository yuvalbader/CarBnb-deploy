const {
  getAllReservations,
  getReservationsByOwnerId,
  getReservationsByCustomerId,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  deleteAllReservations,
} = require("../services/reservation");

const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await getAllReservations();
    if (!reservations) {
      return res.status(404).send("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    next(err);
  }
};

const getReservationsByOwnerId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservations = await getReservationsByOwnerId(id);
    if (!reservations) {
      return res.status(404).send("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    next(err);
  }
};

const getReservationsByCustomerId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservations = await getReservationsByCustomerId(id);
    if (!reservations) {
      return res.status(404).send("Reservations not found");
    }
    return res.status(200).send(reservations);
  } catch (err) {
    next(err);
  }
};

const getReservationById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservation = await getReservationById(id);
    if (!reservation) {
      return res.status(404).send("Reservation not found");
    }
    return res.status(200).send(reservation);
  } catch (err) {
    next(err);
  }
};

const createReservation = async (req, res, next) => {
  const newReservation = req.body;
  try {
    const reservation = await createReservation(newReservation);
    return res.status(200).send("Reservation has been successfully added");
  } catch (err) {
    next(err);
  }
};

const updateReservation = async (req, res, next) => {
  const id = req.params.id;
  const updatedReservation = req.body;
  try {
    const reservation = await updateReservation(id, updatedReservation);
    if (!reservation) {
      return res.status(404).send("Reservation not found");
    }
    return res.status(200).send("Reservation has been successfully updated");
  } catch (err) {
    next(err);
  }
};

const deleteReservation = async (req, res, next) => {
  const id = req.params.id;
  try {
    const reservation = await deleteReservation(id);
    if (!reservation) {
      return res.status(404).send("Reservation not found");
    }
    return res.status(200).send("Reservation has been successfully deleted");
  } catch (err) {
    next(err);
  }
};

const deleteAllReservations = async (req, res, next) => {
  try {
    const reservations = await deleteAllReservations();
    if (!reservations) {
      return res.status(404).send("Reservations not found");
    }
    return res.status(200).send("Reservations has been successfully deleted");
  } catch (err) {
    next(err);
  }
};
