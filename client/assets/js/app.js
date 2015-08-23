(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    Digits.init({ consumerKey: 'Cqgf8PeYqLS69yJygC8aE4nfx'});
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run($rootScope, $state) {
     $rootScope.pages = [
      {
        state: 'home',
        title: 'Home',
        click: function(){
          $state.go('home');
        }
      },
      {
        state: 'login',
        title: 'Login',
        click: function(){
          // $state.go('login');
          Digits.logIn()
          .done(function(res){
            console.log('login', res);
          }) /*handle the response*/
          .fail(function(err){
            console.log('login error', err);
          });
        }
      },
      {
        state: 'dashboard',
        title: 'Dashboard',
        click: function(){
          $state.go('dashboard');
        }
      }
    ];
    FastClick.attach(document.body);
  }

})();
