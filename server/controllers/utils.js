const UtilsService = require("../services/utils")

const availableCars = async (req, res, next) => {
  const search = req.body

  try {
    const availableCars = await UtilsService.getAvailableCars(search)

    return res.status(200).send(availableCars)
  } catch (err) {
    console.log("err", err)
    return res.status(404).send(err.message)
  }
}

module.exports = {
  availableCars,
}
