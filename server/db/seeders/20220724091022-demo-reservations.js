"use strict";
// new Date('1995-12-17T03:24:00');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reservations", [
      {
        start_date: new Date("2022, 7, 30"),
        end_date: new Date("2022, 8, 3"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 7, 30"),
        end_date: new Date("2022, 8, 3"),
        total_price: 200,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 3,
        car_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
