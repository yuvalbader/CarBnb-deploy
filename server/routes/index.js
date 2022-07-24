const express = require("express");
const router = express.Router();
const car = require("./car");
const reservation = require("./reservation");
const login = require("./login");
const user = require("./user");


router.use("/api/login", login);
router.use("/api/car", car);
router.use("/api/reservation", reservation);
router.use("/api/user", user,customer);

module.exports = router;
