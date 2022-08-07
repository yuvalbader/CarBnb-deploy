const express = require("express");
const router = express.Router();
const car = require("./car");
const reservation = require("./reservation");
const user = require("./user");
const utils = require("./utils");
const auth = require("../middleware/auth")

router.use("/api/car", auth, car);
router.use("/api/reservation", auth, reservation);
router.use("/api/user", auth, user);
router.use("/api/utils", auth, utils);

module.exports = router;
