const image = require('../models').imageType;

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