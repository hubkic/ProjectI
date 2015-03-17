'use strict';

/**
 * @ngdoc overview
 * @name projectPLtable
 * @description
 * # projectPLtable
 *
 * Main module of the application.
 */
angular
  .module('projectPLtable', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutControler'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controlerAs: 'contactController'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainController'
      });
  });
