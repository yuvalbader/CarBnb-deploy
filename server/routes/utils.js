const carRouter = require("express").Router();

const { availableCars } = require("../controllers/utils");

carRouter.get("/", availableCars);

module.exports = carRouter;
