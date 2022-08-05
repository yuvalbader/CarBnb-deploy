const { Op } = require("sequelize")
const { User } = require("../db/models")

class UserService {
  getAllUsers = async () => {}

  getUserByEmail = async (email) => {
    return await User.findOne({
      where: {
        email: {
          [Op.like]: "%" + email + "%",
        },
      },
    })
  }

  getUserById = async (id) => {
    return await User.findByPk(id)
  }

  createUser = async (user) => {}

  updateUser = async (updatedUser, id) => {}

  deleteUser = async (userId) => {}

  deleteAllUsers = async () => {}
}

module.exports = new UserService()
