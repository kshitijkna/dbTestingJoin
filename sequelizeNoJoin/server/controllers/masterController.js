const master = require('./master');
const text = require('./text');
const image = require('./image');
const genTemp = require('./genTemp');

module.exports = {
    async create(req, res) {
        console.time("API START");
        let type = req.body.type;
        let typeID = null;

        if(type == "text"){
            let result = await text.create(req.body.text);
            typeID = result.dataValues.id.toString();
        } else if(type == "image"){
            let result = await image.create(req.body.url);
            typeID = result.dataValues.id.toString();
        } else if(type == "genTemplate"){
            let result = await genTemp.create(req.body);
            typeID = result.dataValues.id.toString();
        } else {
            console.log("The type must be one of text or image.");
        }

        let id = await master.create(type, typeID);

        console.timeEnd("API START");
        res.status(200).send(id);
    },
    async getNode(req, res){
        console.time("API START");
        let node = await master.getNode(req.body.id);
        let type = node.dataValues.type;
        let typeID = node.dataValues.typeID;
        
        if(type == "text"){
            let result = await text.getNode(typeID);
            console.timeEnd("API START");
            res.status(200).send(result);
        } else if(type == "image"){
            let result = await image.getNode(typeID);
            console.timeEnd("API START");
            res.status(200).send(result);
        } else if(type == "genTemplate"){
            let result = await genTemp.getNode(typeID);
            console.timeEnd("API START");
            res.status(200).send(result);
        } else {
            console.log("The type must be one of text or image.");
            res.status(404);
        }
    }
};