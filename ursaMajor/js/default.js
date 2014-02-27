
function ursaMajor(container, width, height) {

  this.container = container;
  this._stage = new Kinetic.Stage({
    container: this.container,
    width: this.width,
    height: this.height,
  })

}

// var ursaMajor = {};

var ursaMajor = {


  /**
   * Course constructor. Course represents each course. They are represented as
   * draggable requirements in the interface which can be added to subPaths and
   * semesters. They contain all the information that is required for determining whether
   * they satisfy a requirement and can be accessed on the app to display this info.
   * @constructor
   * @memberof ursaMajor
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
    for (var attr in config) {
      this[attr] = config[attr];
    }
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
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },

  /**
   * Path constructor. Path represents a particular group of majors and minors that
   * a student wants to complete. It contains different SubPaths. When created, it
   * takes up the Tracks associated with its SubPaths but also gives the option to
   * create new Tracks.
   * In the interface, the paths are represented as the root from which SubPath branches
   * originate.
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