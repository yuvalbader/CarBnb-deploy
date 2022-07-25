const userRouter = require("express").Router();
const {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/user");

userRouter.get("/", getAllUsers);
userRouter.get("/:email", getUserByEmail);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.delete("/deleteAll", deleteAllUsers);

module.exports = userRouter;
