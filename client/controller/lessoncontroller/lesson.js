var constant = require('../../../config/constant')
var db = require('../../../database/dbconnection')
var word = require('../wordcontroller/word')
var lesson = require('../../../entity/lesson')
var question = require('../questioncontroller/question')

exports.getLessonDetail = (con, idlesson, callback) => {
    var query = constant.SELECT_ALL_LESSON + " where idlesson = " + idlesson
    console.log("### " + query);
    db.queryDB(con, query, (err, rowLesson) => {
        if (err) {
            callback(err, null)
        } else {
            word.getWordInLesson(con, idlesson, (err, rowsWord) => {
                callback(err, new lesson.Lesson(rowLesson[0], rowsWord))
            })
        }
    })
}

exports.getQuestion = (con, idlesson, callback) => {
    var query = constant.SELECT_ALL_LESSON + " where idlesson = " + idlesson
    console.log("### " + query)
    db.queryDB(con, query, (err, rowLesson) => {
        if (err) {
            callback(err, null)
        } else {
            word.getWordInLesson(con, idlesson, (err, rowsWord) => {
                if (err) {
                    callback(err, null)
                } else {
                    var result = []
                    var index = 0
                    rowsWord.forEach(element => {
                        question.getQuestionInWord(con, element.idword, (err, rowsQuestion) => {
                            if (err) {
                                callback(err, null)
                                return
                            } else {
                                index++;
                                rowsQuestion.forEach(question => {
                                    result.push(question)
                                })
                                if (index == rowsWord.length) {
                                    rowLesson[0].total_question = result.length
                                    rowLesson[0].questions = result
                                    callback(err, rowLesson[0])
                                }
                            }
                        })
                    })
                }
            })
        }
    })
}
