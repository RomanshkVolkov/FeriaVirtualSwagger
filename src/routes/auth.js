const routes = require('express').Router();
const auth = require('../controllers/Auth.js');

routes.post('/v1/auth/signup/', auth.v1AuthSignupPOST);
routes.post('/v1/auth/signin/', auth.v1AuthSigninPOST);
routes.post('/v1/auth/verifyToken/', auth.v1AuthVerifyTokenPOST);

module.exports = routes;