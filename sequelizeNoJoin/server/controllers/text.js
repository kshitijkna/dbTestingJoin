const textType = require('../models').textType;

module.exports = {
  create(text) {
    return textType
      .create({
        text: text
      })
  },
  getNode(Id){
    return textType
      .findByPk(Id)
  }
};