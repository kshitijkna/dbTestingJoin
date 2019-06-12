const mastercontroller = require('../controllers').controller;

module.exports = (app) => {
    app.post('/api/create',mastercontroller.create);
    app.post('/api/get',mastercontroller.getNode);
}