"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id",
      });
      Reservation.belongsTo(models.Car, {
        as: "cars",
        foreignKey: "car_id",
      });
    }
  }
  Reservation.init(
    {
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      total_price: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      car_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reservation",
    }
  );
  return Reservation;
};
