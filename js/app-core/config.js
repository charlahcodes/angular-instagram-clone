let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      template: '<div class="container" ui-view></div>'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController as vm',
      templateUrl: 'templates/add.tpl.html'
    })
    ;


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;