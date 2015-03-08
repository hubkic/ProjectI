'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
