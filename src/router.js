
const AuthenticationController = require('./controllers/AuthenticationControllers')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// all routes
module.exports = (app) => {
  app.post("/register", 
  AuthenticationControllerPolicy.register,
  AuthenticationController.register);
};
 