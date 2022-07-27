const userRouter = require("express").Router();
const {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getUserById,
} = require("../controllers/user");

userRouter.get("/", getAllUsers);
userRouter.get("/email/:email", getUserByEmail);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.delete("/deleteAll", deleteAllUsers);


// my reservations
//my orders 

module.exports = userRouter;
