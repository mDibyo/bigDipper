$(document).ready(function() {
	//var ursaMajor = new ursaMajor();
	var course1 = new ursaMajor.Course({
		id: "COMPSCI.169",
		abbrName: "CS 169",
		courseTitle: "Software Engineering",
		department: "Computer Science",
		description: "Ideas and techniques for designing ...",
		prereqs: [
			"COMPSCI.61B",
			"COMPSCI.61C",
			"COMPSCI.70|MATH.55",
		],
		units: 4,
		professors: [
			"Brewer",
			"Fox",
			"Necula",
			"Sen",
		],		
	});
	var pile1 = new ursaMajor.Pile({
		course: [
			course1
		]
	});
	var path1 = new ursaMajor.Path({
		displayName: "Computer Science Path",
		subPaths: [
			A,
			B
		],
		unitCount: 0
	});
	$("#searchbar").click(function() {
	});
	/**
	 * Counts the number of units in this list of courses.
	 * @param {Array} the courses in this list.
	 * returns number of units. 
	 */
	var countUnit = function (courseList) {
		units = 0;
		for (var i = 0; i < courseList.length; i++) {
			units += courseList[i].units
		}
	}


})