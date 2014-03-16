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
	var subpath1 = new ursaMajor.SubPath({
		id: "subpath1",
		displayName: "My favorite subpath",
		major: "Computer Science",
		requirements: {
			breadth: {
				artAndCulture: "PHILOS.49",
				history: "PHILOS.25A",
				internationalStudies: "POLSCI.5"
			},
			ac: "",
			foreignLanguage: "GERMAN.R5A"
		},
		unitCount: 60,
	});
	var path1 = new ursaMajor.Path({
		displayName: "Computer Science Path",
		subPaths: [
			subpath1
		],
		unitCount: 60
	});
	$("#searchbar").click(function() {
		for (var i = 0; i < pile1.course.length; i++) {
			var course = pile1.course[i];
			$("#searchresults").append(
				// "<div class='pileResult' id= '" + course.abbrName + "''>" + course.abbrName + "<br>" + course.courseTitle + "</div>"
				course.renderPile()
			);
			course.addMouseEvents();
			console.log(course);
		};
		
	});
	/*
	$(".courseTooltip").mouseenter(function () {
      this.style.display = 'block';
      console.log("hi");
    }); */
		
	//});
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
		return units;
	}


})