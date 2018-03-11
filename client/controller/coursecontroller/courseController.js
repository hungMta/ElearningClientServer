var course = require('./course')
var db = require('../../../database/dbconnection');
var con = db.connection();

exports.coursesList = (req,res)=>{
    course.getCoursesList(con,function(err,rows){
        console.log(rows);
        res.json(rows);
    });
}