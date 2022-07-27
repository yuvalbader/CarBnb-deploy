const UtilsService = require("../services/utils");

const availableCars = async (req, res, next) => {
  const search = req.body;
  try {
    const availableCars = await UtilsService.getAvailableCars(search);
    if (!availableCars) {
      throw new Error("There is no available cars matching your trip");
    }
    return res.status(200).send(availableCars);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

module.exports = {
  availableCars,
};
