"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Chen",
          last_name: "Azulai",
          profile_picture: "",
          email: "chenazulay89@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Hassan",
          last_name: "Hassouna",
          profile_picture: "",
          email: "hhasona@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Roni",
          last_name: "Ben simon",
          profile_picture: "",
          email: "roniana11@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Yuval",
          last_name: "Bader",
          profile_picture: "",
          email: "yuvalbader96@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
