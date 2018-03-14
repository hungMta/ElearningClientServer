var constant = require('../../../config/constant');
var db = require('../../../database/dbconnection')

exports.login = (con, email, password, callback) => {
    var query = constant.SELECT_ALL_USER + " where email = '" + email + "' and password = '" + password + "'"
    console.log("##### " + query)
    db.queryDB(con, query, (err, rows) => {
        callback(err, rows);
    })
}

exports.register = (con, userName, email, password, callback) => {
    var query = constant.REGISTER_USER + " ('" + userName + "', '" + email + "', '" + password + "');";
    console.log("##### " + query)
    db.queryDB(con, query, (err, rows) => {
        this.login(con, email, password, (err, rows) => {
            callback(err, rows);
        })
    })
}

exports.checkEmail = (con, email, callback) => {
    var query = constant.SELECT_ALL_USER + " where email = '" + email + "'"
    console.log("##### " + query)
    db.queryDB(con, query, (err, rows) => {
        if (rows.length > 0) {
            callback(err, true);
        } else {
            callback(err, false);
        }
    })
}

exports.userInfo = (con, iduser, callback) => {
    var query = "select user.iduser,user.name,user.avatar,user.email,user.phone,user.address,learned.word_learned,learned.scored "
        + "from (select * from user where iduser = " + iduser + ") user left JOIN "
        + "(SELECT iduser, SUM(my_pathway.total_words) word_learned, SUM(my_pathway.score) scored "
        + "from (select my_pre_pathway.idpathway, my_pre_pathway.iduser,my_pre_pathway.idcourse,my_pre_pathway.idlesson,my_pre_pathway.score , COALESCE(lesson_word.total_words,0 ) total_words "
        + "from (select * from pathway where iduser = " + iduser + ") my_pre_pathway "
        + "left join (select word.idlesson, count(idlesson) total_words "
        + "from word group by idlesson) lesson_word "
        + "on my_pre_pathway.idlesson = lesson_word.idlesson) my_pathway) learned "
        + "on user.iduser = learned.iduser";
    console.log("#### query = " + query)
    db.queryDB(con, query, (err, rows) => {
        callback(err, rows);
    })
}