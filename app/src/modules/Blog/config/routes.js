module.exports = function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('base', {
      templateUrl: '/src/modules/Blog/views/home.html'
    })
    .state('base.desc', {
      url: '/',
      templateUrl: '/src/modules/Blog/views/desc.html',
      controller: 'BaseController',
      controllerAs: 'baseCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/src/modules/Blog/views/about.html'
    });


};
