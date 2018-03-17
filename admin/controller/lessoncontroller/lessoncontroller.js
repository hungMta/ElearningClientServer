var lesson = require('./lesson')
var db = require('../../../database/dbconnection.js');
var con = db.connection();

exports.lessonList = (req,res)=>{
    console.log("Lesson list");
    lesson.getListLesson(con,req.query.idcourse,function(err,rows){
        console.log(rows);
        if(!err){
        res.json(rows);
      }
        else{
            res.status(500).send("Oh uh, something went wrong");
        }
    });
}


exports.insertLesson = (req, res) => {
    var jsonLesson = req.body;
    console.log("insert Lesson");
    lesson.insertLesson(con, jsonLesson, function (err, rows) {
        console.log(rows);
        if (!err) {
            res.json(rows);
        }
        else {
            res.status(500).send("Oh uh, something went wrong!");
            res.json(jsonLesson);
        }

    });
}

exports.updateLesson =(req, res) =>{
    console.log("update Lesson");
    lesson.updateLesson(con, req.body.name, req.body.description, req.body.order, req.body.idlesson,function (err, rows) {
        console.log(rows);
        if (!err) {
            res.json(rows);
        }
        else {
            res.status(500).send("Oh uh, something went wrong!");

        }

    });
}
exports.deleteLesson = (req,res) =>
{
    console.log("delete Lesson");
    lesson.deleteLesson(con,req.body.idlesson,function(err,rows){
        console.log(rows);
        if(!err)
        {
            res.json(rows);
        }
        else{
            res.status(500).send("Oh uh, something went wrong!");
        }
    });
}