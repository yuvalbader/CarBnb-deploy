"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("Cars", "type", { type: Sequelize.STRING }),
      queryInterface.addColumn("Cars", "location", { type: Sequelize.STRING }),
    ];
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn("Cars", "type"),
      queryInterface.removeColumn("Cars", "location"),
    ];
  },
};
