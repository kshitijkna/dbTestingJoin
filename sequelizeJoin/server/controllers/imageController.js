const image = require('../models').imageJoin;

module.exports = {
  create(url) {
    return image
      .create({
        url: url
      })
  },
  getNode(Id){
    return image
      .findByPk(Id)
  }
};