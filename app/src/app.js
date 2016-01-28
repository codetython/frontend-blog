var applicationConfig = require('./modules/config/application.config.js');
var app = new applicationConfig();

// modules
require('./modules/Base/module.js');

angular.module( 'MyApp', [
  'ui.router',
  app.getName()+'.Base'
]);

//init module
angular.element(document.getElementsByTagName('html')[0]);
// add module in html
angular.element().ready(function () {
  // bootstrap the app manually
  angular.bootstrap(document, [app.getName()]);
});

