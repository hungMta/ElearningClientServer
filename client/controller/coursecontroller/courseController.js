var course = require('./course')
var db = require('../../../database/dbconnection');
var constant = require('../../../config/constant');
var error = require('../../error');
var con = db.connection();

exports.coursesList = (req, res) => {
    console.log("courses list");
    course.getCoursesList(con, function (err, rows) {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR,err));
        }
    });
}