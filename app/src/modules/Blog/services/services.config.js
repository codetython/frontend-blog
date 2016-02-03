// App
var appConfig = require('../../config/application.config.js');
var app = new appConfig();
// config module
var moduleConfig = require('../config/module.config.js');
var module = new moduleConfig(app.getName());
// require services

angular.module(module.getServices(), []);
