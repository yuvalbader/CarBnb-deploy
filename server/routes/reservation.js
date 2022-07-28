const reservationRouter = require("express").Router();
const {
  getAllReservations,
  getReservationsByCarId,
  getReservationsByCustomerId,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  deleteAllReservations,
  isCarAvailable,
} = require("../controllers/reservation");

reservationRouter.get("/", getAllReservations);
reservationRouter.get("/car/:id", getReservationsByCarId);
reservationRouter.get("/customer/:id", getReservationsByCustomerId);
reservationRouter.get("/:id", getReservationById);
reservationRouter.post("/available", isCarAvailable);
reservationRouter.post("/", createReservation);
reservationRouter.put("/:id", updateReservation);
reservationRouter.delete("/:id", deleteReservation);
reservationRouter.delete("/deleteAll", deleteAllReservations);

module.exports = reservationRouter;
