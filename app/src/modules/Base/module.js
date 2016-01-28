require('./controllers/controller.config.js');
require('./services/services.config.js');
require('./filters/filters.config.js');
// require('./directives/directives.config.js');
// // config app
var applicationConfig = require('../config/application.config.js');
var app = new applicationConfig();

// // config module
var config = require('./config/module.config.js');
var module = new config(app.getName());
//
angular.module('MyApp.Base', [
  module.getControllers(),
  module.getServices(),
  module.getFilters()
  // module.getDirectives()
]).config(require('./config/routes.js'));


