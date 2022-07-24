const userRouter = require("express").Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from "../controllers/user";

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.delete("/deleteAll", deleteAllUsers);

module.exports = userRouter;
