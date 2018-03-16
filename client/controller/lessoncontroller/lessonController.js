var lesson = require('./lesson')
var db = require('../../../database/dbconnection');
var constant = require('../../../config/constant');
var error = require('../../../entity/error');
var pagination = require('../../../entity/Pagination');
var con = db.connection();

exports.getLesson = (req, res) => {
    var idlesson = req.query.id_lesson
    console.log("### " + idlesson)
    console.log("### " +  req.body)
    if(idlesson){
        lesson.getLessonDetail(con,idlesson,(err,rows)=>{
            if(!err){
                res.json(rows)
            }else{
                res.status(400).json(new error.MyError(400,null,err))
            }
        })
    }else{
        res.status(400).json(new error.MyError(400,constant.BAD_REQUEST))
    }
}

exports.getQuesion = (req,res) =>{
    var idlesson = req.query.id_lesson
    console.log("### " + idlesson)
    if(idlesson){
        lesson.getQuestion(con,idlesson,(err,rows)=>{
            if(!err){
                console.log(rows)
                res.json(rows)
            }else{
                console.log(rows)
                res.status(400).json(new error.MyError(400,null,err))
            }
        })
    }else{
        res.status(400).json(new error.MyError(400,constant.BAD_REQUEST))
    }
}