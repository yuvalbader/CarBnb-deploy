"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cars", [
      {
        profile_piture: "",
        brand: "Tesla",
        model: "X",
        year: 2020,
        number_of_seats: 5,
        price_per_day: 150,
        description: "Electric",
        user_id: 1,
        location:"Tel aviv, Israel",
        type: "Sedan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_piture: "",
        brand: "JEEP",
        model: "W",
        year: 2020,
        number_of_seats: 4,
        price_per_day: 250,
        description: "off-road",
        user_id: 1,
        location:"Tel aviv, Israel",
        type: "SUV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_piture: "",
        brand: "Seat",
        model: "I",
        year: 2022,
        number_of_seats: 4,
        price_per_day: 50,
        description: "sport",
        user_id: 2,
        location:"Tel aviv, Israel",
        type: "Hatchback",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
