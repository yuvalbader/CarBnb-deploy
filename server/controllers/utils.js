const UtilsService = require("../services/utils");

const availableCars = async (req, res, next) => {
  const search = req.body;

  try {
    const availableCars = await UtilsService.getAvailableCars(search);
    return res.status(200).send(availableCars);
  } catch (err) {
    console.log("err", err);
    return res.status(404).send(err.message);
  }
};

const myReservations = async (req, res, next) => {
  const { id } = req.params;

  try {
    const myRes = await UtilsService.getMyReservations(id);
    return res.status(200).send(myRes);
  } catch (err) {
    console.log("err", err);
    return res.status(404).send(err.message);
  }
};

const myOreders = async (req, res, next) => {
  const { id } = req.params;

  try {
    const myOrders = await UtilsService.getMyOrders(id);
    return res.status(200).send(myOrders);
  } catch (err) {
    console.log("err", err);
    return res.status(404).send(err.message);
  }
};

module.exports = {
  availableCars,
  myReservations,
  myOreders,
};
