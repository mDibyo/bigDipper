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
   * @param {String} [config.id] unique id of the course
   * @param {String} [config.displayName] the name that is displayed on the draggable course tile
   * @param {String} [config.courseName] the full name of the course with prefixs and suffixs
   * @param {String} [config.department] the department to which the course belongs
   * @param {Array} [config.preRequisites] the id of courses that are required for taking this course
   * @param {Array} [config.preRequisitesOf] [optional] the courses that have this as a preRequisite
   * @param {Number} [config.units] the number of units that this course is worth
   * @param {Number|Object} [config.ratings] optional rating/ratings posted by other students

   * @example
   * var course = new ursaMajor.Course({
   *   
   * });
   */
  Course: function(config) {
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
   * @param {Array} [config.requirements] the array of requirements that need to be satisfied for this subpath
   * @param {Array} [config.requirements.courses] the array of courses that have already been added
   * to this subpath arranged by the requirements satisfied (by default, the "Free Electives" requirement)

   * @example
   * var subPath = new ursaMajor.SubPath({
   *
   * });
   */
  SubPath: function(config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },

  /**
   * Path constructor. Path represents a particular group of majors and minors that
   * a student wants to complete. It contains different SubPaths. When created, it
   * takes up the Tracks associated with its SubPaths but also gives the option to
   * create new Tracks.
   */
  Path: function(config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },

  /**
   * Track constructor. Track represents the four-year track that a student wants to
   * follow to complete the courses in his Path.
   */
  Track: function (config) {
    for (var attr in config) {
      this[attr] = config[attr];
    }
  },

}






