'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
