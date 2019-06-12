'use strict';
module.exports = (sequelize, DataTypes) => {
  const genTemplateJoin = sequelize.define('genTemplateJoin', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    image_url: DataTypes.STRING,
    defaultActionType: DataTypes.STRING,
    defaultActionUrl: DataTypes.STRING,
    defaultActionWebHeight: DataTypes.STRING,
    button1: DataTypes.STRING,
    button2: DataTypes.STRING,
    button3: DataTypes.STRING
  }, {});
  genTemplateJoin.associate = function(models) {
    genTemplateJoin.hasOne(models.masterJoin);
  };
  return genTemplateJoin;
};