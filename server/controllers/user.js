const userService = require("../services/user");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

const getUserByEmail = async (req, res, next) => {
  const { email } = req.params;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).send(user);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    console.log("here");
    const user = await userService.getUserById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(200).send(user);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const createUser = async (req, res, next) => {
  try {
    newUser = req.body;
    const user = await userService.createUser(newUser);
    return res.status(200).send("User has been successfully added");
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const {id} = req.params;
  const updatedUser = req.body;
  try {
    const user = await userService.updateUser(id, updatedUser);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("User has been successfully updated");
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userService.deleteUser(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("User has been successfully deleted");
  } catch (err) {
    next(err);
  }
};

const deleteAllUsers = async (req, res, next) => {
  try {
    await userService.deleteAllUsers();
    return res.status(200).send("All users have been successfully deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getUserById,
};
