const textJoin = require('../models').textJoin;

module.exports = {
  create(text) {
    return textJoin
      .create({
        text: text
      })
  },
  getNode(Id){
    return textJoin
      .findByPk(Id)
  }
};