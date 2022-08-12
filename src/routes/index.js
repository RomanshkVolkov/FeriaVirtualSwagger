const routes = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const university = require('./university');


routes.use('/', require('./swagger'));


module.exports = routes;