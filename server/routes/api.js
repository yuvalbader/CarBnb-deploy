const express = require("express");
const router = express.Router();
const car = require("./car");
const reservation = require("./reservation");
const user = require("./user");
const utils = require("./utils");

router.use("/api/car", car);
router.use("/api/reservation", reservation);
router.use("/api/user", user);
router.use("/api/utils", utils);

module.exports = router;
