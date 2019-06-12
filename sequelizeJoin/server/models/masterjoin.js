'use strict';
module.exports = (sequelize, DataTypes) => {
  const masterJoin = sequelize.define('masterJoin', {
    type: DataTypes.STRING,
    textJoinId: DataTypes.INTEGER,
    imageJoinId: DataTypes.INTEGER,
    genTemplateJoinId: DataTypes.INTEGER
  }, {});
  masterJoin.associate = function(models) {
    masterJoin.belongsTo(models.textJoin, {
      onDelete: 'CASCADE'
    });
    masterJoin.belongsTo(models.imageJoin, {
      onDelete: 'CASCADE'
    });
    masterJoin.belongsTo(models.genTemplateJoin, {
      onDelete: 'CASCADE'
    });
  };
  return masterJoin;
};