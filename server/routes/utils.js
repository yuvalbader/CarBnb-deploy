const carRouter = require("express").Router();

const { availableCars } = require("../controllers/utils");

carRouter.get("/", availableCars);
// carRouter.post("/", );
// carRouter.put("/:id", );
// carRouter.delete("/:id", );


module.exports = carRouter;
