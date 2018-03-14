var admin = require('./admin');
var db = require('../../../database/dbconnection');
var error = require('../../error');
var con = db.connection();
var constant = require('../../../config/constant');


exports.login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
   admin.login(con, username, password, (err, rows) => {
        if (!err) {
            if (rows.length == 0) {
                res.status(401).json(new error.MyError(401, constant.ADMIN_NOT_FOUND));
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            }
        } else {
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR));
        }
    });
}
