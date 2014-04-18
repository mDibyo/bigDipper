var ursaMajor = angular.module('ursaMajor', []);

ursaMajor.factory('requirementsFactory', function() {

	var factory = {};
	factory.getRequirements = function() {
		return 1;
	}

})

ursaMajor.controller('PileController', function($scope) {

	$scope.displayedCourses = [];

})

ursaMajor.controller('PathController', function($scope, requirementsFactory) {

	$scope.requirements = [];

})