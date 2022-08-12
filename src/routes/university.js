const route = require('express').Router();
const university = require('../controllers/Universidad.js');

route.get('/v1/universidad/', university.v1UniversidadGET);
route.get('/v1/universidad/{IdUniversidad}', university.v1UniversidadIdUniversidadGET);

module.exports = route;