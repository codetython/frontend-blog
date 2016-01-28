module.exports = function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('base', {
      templateUrl: '/src/modules/Base/views/home.html'
    })
    .state('base.desc', {
      url: '/',
      templateUrl: '/src/modules/Base/views/desc.html',
      controller: 'BaseController',
      controllerAs: 'baseCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/src/modules/Base/views/about.html'
    });


};
