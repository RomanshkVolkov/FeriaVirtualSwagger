'use strict';


/**
 * Inicio de sesion para usuarios registrados.
 *
 * body Loginbody Cuerpo que se manda en la solicitud para el login.
 * returns x-acces-token
 **/
exports.v1AuthSigninPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIyLCJpYXQiOjE2NjAyOTAwNDEsImV4cCI6MTY2MDI5MTI0MX0.gixGdzfdHCrTBKB6JwH7kHh5OWI17oJuCakKCBdSCIA"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registro de usuarios nuevos.
 *
 * body User Esquema de la tabla Registrado de la feria virtual.
 * no response value expected for this operation
 **/
exports.v1AuthSignupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Comprobar que token y usuario logueado sean validos.
 *
 * xAuthToken String Token registrado debe incluir Content-Type application/json
 * returns Integer
 **/
exports.v1AuthVerifyTokenPOST = function(xAuthToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

