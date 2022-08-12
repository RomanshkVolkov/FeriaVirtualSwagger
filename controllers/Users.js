'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.usuarioPOST = function usuarioPOST (req, res, next, xAuthToken) {
  Users.usuarioPOST(xAuthToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
