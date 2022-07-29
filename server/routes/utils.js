const carRouter = require("express").Router();

const { availableCars } = require("../controllers/utils");

carRouter.post("/", availableCars);

module.exports = carRouter;
