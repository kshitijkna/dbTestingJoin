const master = require('./master');
const text = require('./textController');
const image = require('./imageController');
const genTemp = require('./genTemplateController');

module.exports = {
    async create(req, res) {
        let type = req.body.type;
        let typeID = [null, null, null];

        if(type == "text"){
            let result = await text.create(req.body.text);
            typeID[0] = result.dataValues.id.toString();
        } else if(type == "image"){
            let result = await image.create(req.body.url);
            typeID[1] = result.dataValues.id.toString();
        } else if(type == "genTemplate"){
            let result = await genTemp.create(req.body);
            typeID[2] = result.dataValues.id.toString();
        } else {
            console.log("The type must be one of text or image.");
        }

        let id = await master.create(type, typeID);

        res.status(200).send(id);
    },
    async getNode(req,res) {
        let result = await master.getNode(req.body.id);
        console.log(result);
        res.status(200).send(result);
    }
};