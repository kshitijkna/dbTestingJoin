'use strict';
module.exports = (sequelize, DataTypes) => {
  const textType = sequelize.define('textType', {
    text: DataTypes.STRING
  }, {});
  textType.associate = function(models) {
    // associations can be defined here
  };
  return textType;
};