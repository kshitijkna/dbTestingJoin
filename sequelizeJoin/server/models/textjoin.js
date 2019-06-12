'use strict';
module.exports = (sequelize, DataTypes) => {
  const textJoin = sequelize.define('textJoin', {
    text: DataTypes.STRING
  }, {});
  textJoin.associate = function(models) {
    textJoin.hasOne(models.masterJoin);
  };
  return textJoin;
};