'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('genTemplateTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      defaultActionType: {
        type: Sequelize.STRING
      },
      defaultActionUrl: {
        type: Sequelize.STRING
      },
      defaultActionWebHeight: {
        type: Sequelize.STRING
      },
      button1: {
        type: Sequelize.STRING
      },
      button2: {
        type: Sequelize.STRING
      },
      button3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('genTemplateTypes');
  }
};