var constant = require('../../../config/constant');
var db = require('../../../database/dbconnection')

exports.getAllUser = (con, callback) => {
    var query = constant.SELECT_ALL_USERS
    console.log("###########" + query)
    db.queryDB(con, query, (err, row) => {
        callback(err, row);
    })
}

exports.deleteUser = (con, iduser, callback) => {
    con.query(constant.DELETE_USER + "'" + iduser + "'", function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        callback(err, rows);

    });
}