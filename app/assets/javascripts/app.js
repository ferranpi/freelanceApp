(function () {

  'use strinc';

  var freelanceApp = angular.module('freelanceApp', [
    'ngAnimate',
    'ngAria',
    'templates',
    'ngRoute',
    'ngResource',
    'ngMaterial'
  ]);

  freelanceApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'home/index.html'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
})();



// .config('$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'index.html'
//     });
// });
// (function () {
//   'use strict';
//     /**
//      * Main module of the application.
//      */
//   angular
//     .module('freelanceApp', [
//       'ngAnimate',
//       'ngAria',
//       'templates',
//       'ngRoute',
//       'ngResource',
//       'ngMaterial'
//     ])
//     .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
//       $routeProvider
//         .when('/', {
//           templateUrl: 'index.html'
//           //controller: 'MainController'
//         })
//         .when('/contactos', {
//           templateUrl: 'scripts/contactos/views/list.html'
//           //controller: 'MainController'
//         })
//         .otherwise({
//           redirectTo: '/'
//         });
//     //   //$mdIconProvider
//     //   //  .defaultIconSet("./assets/svg/avatars.svg", 128)
//     //   //  .icon("share", "./assets/svg/share.svg", 24)
//     //   //  .icon("google_plus", "./assets/svg/google_plus.svg", 512)
//     //   //  .icon("hangouts", "./assets/svg/hangouts.svg", 512)
//     //   //  .icon("twitter", "./assets/svg/twitter.svg", 512)
//     //   //  .icon("phone", "./assets/svg/phone.svg", 512);
//     //   $mdThemingProvider.theme('default')
//     //     .primaryPalette('blue')
//     //     .accentPalette('pink');
//     });
// })();
