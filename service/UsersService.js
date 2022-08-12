'use strict';


/**
 * Permite comprobar si el token sigue valido y si existe el usuario al que le corresponde.
 *
 * xAuthToken String Token registrado debe incluir Content-Type application/json
 * returns x-acces-token
 **/
exports.usuarioPOST = function(xAuthToken) {
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

