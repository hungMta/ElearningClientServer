var course = require('./course')
var db = require('../../../database/dbconnection');
var constant = require('../../../config/constant');
var error = require('../../../entity/error');
var pagination = require('../../../entity/Pagination');
var con = db.connection();

exports.coursesList = (req, res) => {
    var page = req.query.page;
    console.log("courses list");
    course.getCoursesList(con,page, function (err,total, rows) {
        if (!err) {
            res.json(new pagination.Pagingation(total,constant.LIMIT,parseInt(page),rows));
        }
        else {
            console.log(err);
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR, err));
        }
    });
}

exports.searchCourse = (req, res) => {
    var page = req.query.page
    var name = req.query.name
    course.searchCourse(con,page,name, function (err,total, rows) {
        if (!err) {
            res.json(new pagination.Pagingation(total,constant.LIMIT,parseInt(page),rows));
        }
        else {
            console.log(err);
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR, err));
        }
    });
}

exports.myCourse = (req, res) => {
    var iduser = req.query.id_user;
    console.log("###### myCourse")
    console.log("###### " + iduser)
    if (iduser) {
        course.allMyCourse(con, iduser, (err, rows) => {
            if (!err) {
                res.json(rows)
            } else {
                res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR, err));
            }
        })
    } else {
        // query from search course, do not need iduser
        course.courseDetail(con, idcourse, (err, rows) => {
            if (!err) {
                if (rows.length > 0) {
                    res.json(rows[0])
                } else {
                    res.status(404).json(new error.MyError(404, constant.COURSE_NOT_FOUND, err));
                }
            } else {
                res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR, err));
            }
        })
    }
}