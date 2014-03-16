function ursaMajor() { }
 
/**
 * Global variables which will be used throughout the program and can be changed
 * at will to change the whole program.
 */
var TEXTFONT = "Calibri",
  BGCOLOR = "white",
  TEXTCOLOR = "#8A8A8A",
  TEXTSIZE = 12,
  BORDERCOLOR = "#BFBFBF",
  BOXWIDTH = 40,
  BOXHEIGHT = 10;
 
// var ursaMajor = {};
 
var ursaMajor = {
 
  /**
   * Course constructor. Course represents each course. They are represented as
   * draggable requirements in the interface which can be added to subPaths and
   * semesters. They contain all the information that is required for determining whether
   * they satisfy a requirement and can be accessed on the app to display this info.
   * @constructor
   * @memberof ursaMajor
   * @param {Object} config
   * @param {String} [config.id] unique id of the course, can be full course title :: [COMPSCI.169]
   * @param {String} [config.abbrName] the name that is displayed on the draggable coursetile :: [CS 169]
   * @param {String} [config.courseTitle] the title of the course with prefixes and suffixes [Software Engineering]
   * @param {String} [config.department] the department id to which the course belongs [Computer Science]
   * @param {String} [config.description] description for the course
   * @param {Array}  [config.prereqs] the id of courses that are required for taking this course 
   * @param {Array}  [config.prereqsOf] the courses that have this as a prerequisite
   * @param {Number} [config.units] the number of units that this course is worth
   * @param {Array}  [config.professors] optional the professors who teach this course
   * @param {Number|Object} [config.ratings] optional rating/ratings posted by other students
   * !!! change Course.renderTooltip() when changing the prototype of this function !!!

   * @example
   * var course = new ursaMajor.Course({
   *   id: "COMPSCI.169",
   *   abbrName: "CS 169",
   *   courseTitle: "Software Engineering",
   *   department: "Computer Science",
   *   description: "Ideas and techniques for designing ..."
   *   prereqs: [
   *     "COMPSCI.61B",
   *     "COMPSCI.61C",
   *     "COMPSCI.70|MATH.55",
   *   ],
   *   units: 4,
   *   prefessors: [
   *     "Brewer",
   *     "Fox",
   *     "Necula",
   *     "Sen",
   *   ]
   * });
   */
  Course: function (config) {
    this.__init(config);
  },
 
  /**
   * Pile constructor. Pile represents the courses that will satisfy a particular
   * requirement in the SubPath/Path.
   * In the interface, it is represented as a list of courses on the left side ordered
   * by popularity, difficulty level or some other metric stored in the ratings object
   * of each course. Each course can then be dragged from the Pile into the corresponding
   * area in the SubPath/Path.
   * @param {Object} config
   * @param {Array} [config.courses] the list of courses in the Pile arranged in the order of preference
   */
  Pile: function (config) {
    this.__init(config);
    //this.setCourses(config.courses);
  },
 
  /**
   * SubPath constructor. SubPath represents a major/minor that a student wants
   * to complete. It keeps track of the different requirements (university, college, 
   * major, unit). It contains courses as its members. It has different four-year
   * Tracks associated with it. It can be joined along with other SubPaths to form
   * Paths.
   * In the interface, they are represented as a tree with nodes representing the
   * different requirements. Courses can be added to these nodes (only if they satisfy
   * that requirement). It can be combined to other SubPaths to form branches of a 
   * Path tree. It can give access to different Tracks through a separate interface.
   * @constructor
   * @memberof ursaMajor
   * @param {Object} config 
   * @param {String} [config.id] unique id of the subPath
   * @param {String} [config.displayName] the name that is displayed as the path name when it
   * the only member of a Path
   * @param {String} [config.major] the major/minor that this path is meant for
   * @param {Array}  [config.requirements.type] the array of requirements that need to be satisfied for this subpath
   * @param {Object} [config.requirements.type.courses] the array of courses that have already been added
   * to this subpath arranged by the requirements satisfied (by default, the "Free Electives" requirement)
   * @param {Number} [config.unitCount] the number of units in the courses of this SubPath
 
   * @example
   * var subPath = new ursaMajor.SubPath({
   *   id: "###################",
   *   displayName: "My favorite SubPath",
   *   major: "Computer Science",
   *   requirements: {
   *     breadth: {
   *       artAndCulture: "PHILOS.49",
   *       history: "PHILOS.25A",
   *       internationalStudies" "POLSCI.5",
   *     },
   *     ac: "",
   *     foreignLanguage: "GERMAN.R5A",
   *     r&cA: "RHETOR.R1A",
   *     r&cB: "RHETOR.R1B",
   *     ...
   *   },
   *   unitCount: 60,
   * });
   */
  SubPath: function (config) {
    this.__init(config);
  },
 
  /**
   * Path constructor. Path represents a particular group of majors and minors that
   * a student wants to complete. It contains different SubPaths. When created, it
   * takes up the Tracks associated with its SubPaths but also gives the option to
   * create new Tracks.
   * In the interface, the paths are represented as the root from which SubPath branches
   * originate.
   * @param {Object} config
   * @param {String} [config.displayName] the name that is displayed
   * @param {Array}  [config.subPaths] the SubPath objects that make up this path
   * @param {Number} [config.unitCount] the number of units in all the courses of this Path
   */
  Path: function (config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },
 
  /**
   * Track constructor. Track represents the four-year track that a student wants to
   * follow to complete the courses in his Path.
   * In the interface, the track is represented as a table of dynamic boxes into which
   * courses can be dropped. The boxes might be color-coded to signify healthy/unhealthy
   * unit counts or easy/hard courseloads (if course difficulty levels are available
   * from other users of the site.
   * @param {Object} config
   * @param {Array}  [config.semesters] the semesters that make up the four years
   * @param {Array}  [config.semesters[].courses] the courses taken/chosen for each semester
   * @param {Number} [config.semesters.unitCount] the number of units taken in each semester
   */
  Track: function (config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },
 
}
 
 
ursaMajor.Course.prototype = {
   
  /**
   * __init function initializes this Course with the course that it holds and creates 
   * the corresponding visual elements.
   * @param {Object} config the set of attributes that represent the course
   * @return {Kinetic.Group} the visual representation of the course in the canvas
   */
  __init: function(config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
    this.width = BOXWIDTH;
    this.height = BOXHEIGHT;
    // Graphic elements
    this._layer = null;
    return this;
  },
 
  /**
   * render function adds this course to its layer at the proper coordinate ready to be
   * added to the interface on the next redraw of the canvas.
   * @param {Number} x the x-coordinate of the course box in the canvas
   * @param  {Number} y the y-coordinate of the course box in the canvas
   */
  renderPile: function () {
    // Mouseevents
    $("#" + this.abbrName + "_hover").on()
    // Representation
    var rep = "";
    rep += "<div class='pileResult' id='" + this.abbrName + "'>" + this.abbrName;
    rep += "<br>" + this.courseTitle + "</div>";
    return rep + this.renderTooltip();
  },

  renderTooltip: function () {
    var rep = "";
    rep += "<div class='courseTooltip' id='" + this.abbrName + "_hover'>";
    if (this.abbrName !== undefined) {
      rep += "<br><b>Course: </b>" + this.abbrName;
    }
    if (this.courseTitle !== undefined) {
      rep += " - " + this.courseTitle;
    }
    if (this.department !== undefined) {
      rep += "<br><b>Department: </b>" + this.department;
    }
    if (this.description !== undefined) {
      rep += "<br>" + this.description;
    }
    if (this.prereqs !== undefined) {
      rep += "<br><b>Pre-requisites: </b>" + this.prereqs[0];
      for (var i = 1; i < this.prereqs.length; i++) {
        rep += ", " + this.prereqs[i];
      }
    }
    if ()
    rep += "/div>";
  }
 
}
 
 
ursaMajor.Pile.prototype = {
 
  /**
   * __init function initializes the Pile with the courses that it should contain. It also
   * creates the corresponding pile visual element (with courses arranged)
   * @param  {Object} config the set of courses and other attributes that comprise the Pile
   * @return {Kinetic.Group} the visual representation of the Pile in the canvas
   */
  __init: function (config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
    this.width = BOXWIDTH;
    this.height = 120;
    // Graphic elements
    // this.layer = new Kinetic.Layer();
    // this._box = new Kinetic.Rect({
    //   width: this.width,
    //   height: this.height,
    //   fill: BGCOLOR,
    //   stroke: BORDERCOLOR,
    //   strokeWidth: 3,
    // });
    // this._representation = new Kinetic.Group();
    // this._representation.add(this._box);
    // return this._representation;
    return this;
  },
 
  /**
   * render function adds all the courses and the pile itself to their proper coordinate ready
   * to be added to the interface on the next redraw of the canvas.
   * @param {Number} x the x-coordinate of the pile box in the canvas
   * @param  {Number} y the y-coordinate of the pile box in the canvas
   */
  render: function (x, y) {
    this._representation.position({
      x: x,
      y: y,
    });
    this._layer.add(this._representation);
    for (var i = 0; i < this.courses.length; i++) {
      this.courses[i].layer = this.layer;
      this.courses[i].render(x, y + i * BOXHEIGHT);
    };
  },
 
  pileDriver: function () {
    this;
  },
 
};
 
 
ursaMajor.SubPath.prototype = {
 
  __init: function (config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  }
   
}