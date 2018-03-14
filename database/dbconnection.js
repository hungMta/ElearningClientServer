var mysql = require('../lib/node_modules/mysql');
var config = require('../config/host.json');
var db;
exports.connection = () => {
    if (!db) {
        db = mysql.createConnection(config);
        db.connect(function (err) {
            if (!err) {
                console.log(err);
                console.log('Database is connected!');
            } else {
                console.log(err);
            }
        });
    }
    return db;
}

exports.queryDB = (con, query, callback) => {
    con.query(query, (err, rows, fields) => {
        if (err) console.log("err ==== " + err);
        callback(err, rows);
    })
}