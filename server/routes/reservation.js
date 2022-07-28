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
} = require("../controllers/reservation");

reservationRouter.get("/", getAllReservations);
reservationRouter.get("/car/:id", getReservationsByCarId);
reservationRouter.get("/customer/:id", getReservationsByCustomerId);
reservationRouter.get("/:id", getReservationById);
reservationRouter.get("/availability", isCarAvailabl);
reservationRouter.post("/", createReservation);
reservationRouter.put("/:id", updateReservation);
reservationRouter.delete("/:id", deleteReservation);
reservationRouter.delete("/deleteAll", deleteAllReservations);

module.exports = reservationRouter;