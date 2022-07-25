class UserService {
  getAllUsers = async () => {};

  getUserByEmail = async (email) => {
    console.log("got to get user by email: ", email);
    return await User.findOne({
      where: {
        email: email,
      },
    });
  };

  createUser = async (user) => {};

  updateUser = async (updatedUser, id) => {};

  deleteUser = async (userId) => {};

  deleteAllUsers = async () => {};
}

module.exports = new UserService();
