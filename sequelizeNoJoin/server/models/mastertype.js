'use strict';
module.exports = (sequelize, DataTypes) => {
  const masterType = sequelize.define('masterType', {
    type: DataTypes.STRING,
    typeID: DataTypes.INTEGER
  }, {});
  masterType.associate = function(models) {
    // associations can be defined here
  };
  return masterType;
};