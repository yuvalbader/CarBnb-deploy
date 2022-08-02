const carRouter = require("express").Router();

const {
  availableCars,
  myReservations,
  myOreders,
} = require("../controllers/utils");

carRouter.post("/searchResult", availableCars);
carRouter.get("/reservations/:id", myReservations);
carRouter.get("/orders/:id", myOreders);

module.exports = carRouter;
