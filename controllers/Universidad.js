'use strict';

var utils = require('../utils/writer.js');
var Universidad = require('../service/UniversidadService');

module.exports.v1UniversidadGET = function v1UniversidadGET (req, res, next) {
  Universidad.v1UniversidadGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UniversidadIdUniversidadGET = function v1UniversidadIdUniversidadGET (req, res, next, idUniversidad) {
  Universidad.v1UniversidadIdUniversidadGET(idUniversidad)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
