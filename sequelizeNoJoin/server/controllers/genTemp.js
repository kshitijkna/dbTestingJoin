const genTemp = require('../models').genTemplateType;

module.exports = {
  create(body) {
    return genTemp
      .create({
        title: body.title,
        subtitle: body.subtitle,
        image_url: body.image_url,
        defaultActionType: body.defaultActionType,
        defaultActionUrl: body.defaultActionUrl,
        defaultActionWebHeight: body.defaultActionWebHeight,
        button1: body.button1,
        button2: body.button2,
        button3: body.button3
      })
  },
  getNode(Id){
    return genTemp
      .findByPk(Id)
  }
};