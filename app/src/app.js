var applicationConfig = require('./modules/config/application.config.js');
var app = new applicationConfig();

// modules
require('./modules/Blog/module.js');

angular.module( app.getName(), [
  'ui.router',
  app.getName() + '.Blog'
]);

//init module
angular.element(document.getElementsByTagName('html')[0]);
// add module in html
angular.element().ready(function () {
  // bootstrap the app manually
  angular.bootstrap(document, [ app.getName() ]);
});

