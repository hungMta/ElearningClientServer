var constant = require('../../../config/constant')
var db = require('../../../database/dbconnection')

exports.getWordInLesson = (con, idlesson, callback) => {
    var query = constant.SELECT_ALL_WORD + " where idlesson = " + idlesson;
    console.log("####  " + query)
    db.queryDB(con, query, (err, rows, fields) => {
        callback(err,rows)
    })
}