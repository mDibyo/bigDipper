$(document).ready(function(){
	var ursaMajor = new ursaMajor();
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
	var pile = new ursaMajor.Pile({
		course: [
			course1
		]
	});
	$("#searchbar").click(function() {
		$("#searchresults").append()
	});


})