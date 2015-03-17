'use strict';

/**
 * @ngdoc overview
 * @name projectPLtable.controller:ContactCtrl
 * @description
 * # projectPLtable
 *
 * Controller of the projectPLtable
 */
angular.module('projectPLtable')
	.controller('TabController',['$location',function($location){
		
		this.tab = 1;

	    if($location.path()==='/'){
	    	this.tab = 1;
	    }else if($location.path()==='/about'){
	    	this.tab = 2;
		}else if ($location.path()==='/contact'){
			this.tab = 3;
		};
	    this.isTabSelected = function(index){
	      return this.tab === index;
	    };  

	    this.setTab = function(index){
	      this.tab = index;
  		};
}]);