var user = require('./user');
var db = require('../../../database/dbconnection');
var error = require('../../error');
var con = db.connection();
var constant = require('../../../config/constant');

exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    user.login(con, email, password, (err, rows) => {
        if (!err) {
            if (rows.length == 0) {
                res.status(401).json(new error.MyError(401, constant.USER_NOT_FOUND));
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            }
        } else {
            res.status(401).json(new error.MyError(401, constant.USER_NOT_FOUND));
        }
    });
}