const routes = require('express').Router();
const user = require('../controllers/Users.js');

routes.post('/v1/usuario/', user.usuarioPOST);

module.exports = routes;