const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../services/user");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    newUser = req.body;
    const user = await createUser(newUser);
    return res.status(200).send("User has been successfully added");
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await updateUser(id, updatedUser);
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
    const user = await deleteUser(id);
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
    await deleteAllUsers();
    return res.status(200).send("All users have been successfully deleted");
  } catch (err) {
    next(err);
  }
};
