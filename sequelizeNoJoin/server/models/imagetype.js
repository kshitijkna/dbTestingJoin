'use strict';
module.exports = (sequelize, DataTypes) => {
  const imageType = sequelize.define('imageType', {
    url: DataTypes.STRING
  }, {});
  imageType.associate = function(models) {
    // associations can be defined here
  };
  return imageType;
};