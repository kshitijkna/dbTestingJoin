const master = require('./master');
const text = require('./textController');
const image = require('./imageController');
const controller = require('./masterController');
const genTemplate = require('./genTemplateController');

module.exports = {
    master,
    text,
    image,
    controller,
    genTemplate
}