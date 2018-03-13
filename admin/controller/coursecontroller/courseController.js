var course = require('./course')
var db = require('../../../database/dbconnectio.js');
var con = db.connection();

exports.coursesList = (req,res)=>{
    console.log("courses list");
    course.getCoursesList(con,function(err,rows){
        console.log(rows);
        if(!err){
        res.json(rows);}
        else{
            res.status(500).send("Oh uh, something went wrong");
        }
    });
}