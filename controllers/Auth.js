'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.v1AuthSigninPOST = function v1AuthSigninPOST (req, res, next, body) {
  Auth.v1AuthSigninPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthSignupPOST = function v1AuthSignupPOST (req, res, next, body) {
  Auth.v1AuthSignupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthVerifyTokenPOST = function v1AuthVerifyTokenPOST (req, res, next, xAuthToken) {
  Auth.v1AuthVerifyTokenPOST(xAuthToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
