var constant = require('../../../config/constant')
var db = require('../../../database/dbconnection')
var word = require('../wordcontroller/word')
var lesson = require('../../../entity/lesson')

exports.getLessonDetail = (con, idlesson, callback) => {
    var query = constant.SELECT_ALL_LESSON + " where idlesson = " + idlesson
    console.log("### " + query);
    db.queryDB(con,query,(err,rowLesson)=>{
        if(err){
            callback(err,null)
        } else{
            word.getWordInLesson(con,idlesson,(err,rowsWord) =>{
                callback(err,new lesson.Lesson(rowLesson[0],rowsWord))
            })
        }
    })
}