var constants = require('../../../config/constant')

var getCoursesList = function (con, callback) {
    con.query(constants.SELECT_ALL_COURSES, function (err, rows, fields) {
        try {
            console.log("query");
            if (err) console.log(err);
            callback(err, rows);
        } catch (error) {
            console.log("cacth======================");
        }
    })
}

exports.getCoursesList = getCoursesList;