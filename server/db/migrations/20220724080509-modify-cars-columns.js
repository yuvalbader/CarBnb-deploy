"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("Cars", "brand", { type: Sequelize.STRING }),
      queryInterface.addColumn("Cars", "model", { type: Sequelize.STRING }),
      queryInterface.addColumn("Cars", "year", { type: Sequelize.INTEGER }),
      queryInterface.removeColumn("Cars", "type"),
    ];
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn("Cars", "brand"),
      queryInterface.removeColumn("Cars", "model"),
      queryInterface.removeColumn("Cars", "year"),
      queryInterface.addColumn("Cars", "type", { type: Sequelize.STRING }),
    ];
  },
};
