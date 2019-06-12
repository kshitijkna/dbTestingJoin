const master = require('../models').masterJoin;
const textJoin = require('../models').textJoin;
const imageJoin = require('../models').imageJoin;
const genTemplateJoin = require('../models').genTemplateJoin;

module.exports = {
  create(type, typeID) {
    return master
      .create({
        type: type,
        textJoinId: typeID[0],
        imageJoinId: typeID[1],
        genTemplateJoinId: typeID[2]
      })
  },
  getNode(Id){
    return master
        .findByPk(Id, {
            include: [textJoin,imageJoin,genTemplateJoin]
        })
  }
};