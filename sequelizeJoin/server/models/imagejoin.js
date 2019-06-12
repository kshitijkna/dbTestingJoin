'use strict';
module.exports = (sequelize, DataTypes) => {
  const imageJoin = sequelize.define('imageJoin', {
    url: DataTypes.STRING
  }, {});
  imageJoin.associate = function(models) {
    imageJoin.hasOne(models.masterJoin);
  };
  return imageJoin;
};