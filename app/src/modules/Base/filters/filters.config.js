// App
var appConfig = require('../../config/application.config.js');
var app = new appConfig();
// Module
var moduleConfig = require('../config/module.config.js');
var module = new moduleConfig(app.getName());
// require Filters

angular.module(module.getFilters(), []);
