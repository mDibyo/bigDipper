var ursaMajor = angular.module('ursaMajor', []);

ursaMajor.factory('requirementsFactory', function() {

	var factory = {};
	factory.getRequirements = function() {
		// TODO: get requirements of a particular major as JSON
		return null;
	}

	return factory;
})

ursaMajor.factory('coursesFactory', function() {

	var factory;
	factory.getCourses = function(string) {
		// TODO: return a list of courses that contain the given search string
		return null;
	}

	return factory;
})

ursaMajor.factory('userCourses', function() {

})

ursaMajor.controller('PileController', function($scope, coursesFactory) {

	$scope.displayedCourses = [];

	$scope.searchForCourse = function() {
		setTimeout(function() {
			$scope.displayedCourses = coursesFactory.getCourses($scope.courseSearch);
		}, 200);
	}

})

ursaMajor.controller('PathController', function($scope, requirementsFactory) {

	$scope.requirements = [];

	$scope.title = {}
	$scope.title.mouseover = false;
	$scope.title.mouseenter = function() {
		$scope.title.mouseover = true;
	}
	$scope.title.mouseleave = function() {
		$scope.title.mouseover = false;
	}

})