// App
var appConfig = require("../../config/application.config.js");
var app = new appConfig();
// config module
var moduleConfig = require('../config/module.config.js');
var module = new moduleConfig(app.getName());
// require controllers
var BaseController = require('./baseController.js');

angular.module(module.getControllers(), [])
  .controller('BaseController', BaseController);
