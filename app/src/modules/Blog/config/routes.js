module.exports = function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('blog', {
      templateUrl: '/src/modules/Blog/views/layout.html'
    })
    .state('blog.home', {
      url: '/',
      templateUrl: '/src/modules/Blog/views/home.html',
      controller: 'BaseController',
      controllerAs: 'baseCtrl'
    })
    .state('blog.contact', {
      url: '/contato',
      templateUrl: '/src/modules/Blog/views/contact.html'
    });


};
