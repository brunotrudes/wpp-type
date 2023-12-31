import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Queues", "resetChatbotMsg", {
      type: DataTypes.TEXT,
      defaultValue: true,
      allowNull: false
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Queues", "resetChatbotMsg");
  }
};
