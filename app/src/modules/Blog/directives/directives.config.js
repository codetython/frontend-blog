// App
var appConfig = require("../../config/application.config.js");
var app = new appConfig();
// module
var moduleConfig = require('../config/module.config.js');
var module = new moduleConfig(app.getName());
// require directives

angular.module(module.getDirectives(), []);
