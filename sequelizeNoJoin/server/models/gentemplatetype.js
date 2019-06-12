'use strict';
module.exports = (sequelize, DataTypes) => {
  const genTemplateType = sequelize.define('genTemplateType', {
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
  genTemplateType.associate = function(models) {
    // associations can be defined here
  };
  return genTemplateType;
};