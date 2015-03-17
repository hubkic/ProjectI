'use strict';

/**
 * @ngdoc function
 * @name projectPLtable.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectPLtable
 */
angular.module('projectPLtable')
  .controller('MainCtrl', ['$http','$scope',function($http,$scope){
  	
	var url = "http://football-api.com/api/?Action=standings&APIKey=fbae121b-cbd7-ab18-f5825f28e01d&comp_id=1204";
  	$http.get(url).
  	success(function(data){
  		$scope.data = data;
  	}).
  	error(function(data){
  		$scope = {stand_team_name:'dupa'};
  	});

  	this.isPromotionClass = function(index){
  		var desc = $scope.data.teams[index].stand_desc;
  		var numChampion = desc.search("Champions League");
  		var numEuropa = desc.search("Europa");
  		return numChampion > 0? "list-group-item-info":numEuropa >0?"list-group-item-success":"";
  	};

  	this.getArrow = function(index){
  		var getLastResult = $scope.data.teams[index].stand_recent_form.charAt(0);
  		return getLastResult === 'W'? "glyphicon glyphicon-arrow-up":getLastResult === 'L'?"glyphicon glyphicon-arrow-down":"glyphicon glyphicon-minus";
   	};

  }]);
