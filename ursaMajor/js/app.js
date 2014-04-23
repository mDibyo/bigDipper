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

ursaMajor.factory('userFactory', function() {

	var factory;
	factory.user = // TODO: return the user object with his list of paths and courses
	
	return factory;
})

ursaMajor.controller('PileController', function($scope, coursesFactory) {

	$scope.displayedCourses = [];

	$scope.searchForCourse = function() {
		setTimeout(function() {
			$scope.displayedCourses = coursesFactory.getCourses($scope.courseSearch);
		}, 200);
	}

})

ursaMajor.controller('PathController', function($scope, requirementsFactory, userFactory) {

	$scope.requirements = [];

	// Title
	$scope.title = {}
	$scope.title.current = userFactory.path.title;
	$scope.title.mouseover = false;
	$scope.title.mouseenter = function() {
		$scope.title.mouseover = true;
	}
	$scope.title.mouseleave = function() {
		$scope.title.mouseover = false;
		userFactory.title = $scope.title.current;
	}

	// Sub-Path
	$scope.subpaths = [];
	$scope.subpaths.addSubpath = function(major) {
		
	}

})