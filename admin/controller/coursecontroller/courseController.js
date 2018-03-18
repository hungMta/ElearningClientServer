var course = require('./course')
var db = require('../../../database/dbconnection.js');
var con = db.connection();

exports.coursesList = (req, res) => {
    console.log("courses list");
    course.getCoursesList(con, function (err, rows) {
        console.log(rows);
        if (!err) {
            res.json(rows);
        }
        else {
            res.status(500).send("Oh uh, something went wrong");
        }
    });
}

exports.insertCourse = (req, res) => {
    var jsonCourse = req.body;
    console.log("insert course");
    course.insertCourse(con, jsonCourse, function (err, rows) {
        console.log(rows);
        if (!err) {
            res.json(rows);
        }
        else {
            res.status(500).send("Oh uh, something went wrong!");
            res.json(jsonCourse);
        }

    });
}

exports.updateCourse =(req, res) =>{
    console.log("update course");
    course.updateCourse(con, req.body.name, req.body.desciption, req.body.image, req.body.idcourse,function (err, rows) {
        console.log(rows);
        if (!err) {
            res.json(rows);
        }
        else {
            res.status(500).send("Oh uh, something went wrong!");

        }

    });
}
exports.deleteCourse = (req,res) =>
{
    console.log("delete course");
    const idcourse = req.params.idcourse;
    course.deleteCourse(con,idcourse,function(err,rows){
        console.log(rows);
        if(!err)
        {
            res.json({message:`Course ${idcourse} delete.`});
        }
        else{
            res.status(500).send("Oh uh, something went wrong!");
        }
    });
}