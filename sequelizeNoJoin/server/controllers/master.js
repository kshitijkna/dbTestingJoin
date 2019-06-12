const master = require('../models').masterType;

module.exports = {
  create(type, typeID) {
    return master
      .create({
        type: type,
        typeID: typeID
      })
  },
  getNode(Id){
    return master
      .findByPk(Id)
  }
};