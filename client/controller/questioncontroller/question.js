var constant = require('../../../config/constant')
var db = require('../../../database/dbconnection')

exports.getQuestionInWord = (con, idword, callback) => {
    var query = constant.SELECT_ALL_QUESTION + " where idword = " + idword + " order by question.order asc "
    console.log("#### " + query);
    db.queryDB(con, query, (err, rows) => {
        callback(err, rows)
    })
}

exports.getQuestionInWordPromise = (con, idword) => {
    return new Promise((resolve, reject) => {
        var query = constant.SELECT_ALL_QUESTION + " where idword = " + idword
        console.log("#### " + query);
        db.queryDB(con, query, (err, rows) => {
            if (err) return reject(err)
            return resolve(rows)
        })
    })
}