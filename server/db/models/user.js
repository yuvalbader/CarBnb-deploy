"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Car,{
        as:"my_cars",
        foreignKey:"user_id"
      });
      User.hasMany(models.Reservation,{
        as:"reservations",
        foreignKey:"user_id"
      });
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      license_type: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
