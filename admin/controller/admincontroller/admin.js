var constant = require('../../../config/constant');


exports.login = (con, username, password, callback) => {
    con.query(constant.SELECT_ADMIN + " where username = '" + username + "' and password = '" + password + "'",
        function (err, rows, fields) {
            if (err) { console.log(err); }
            console.log(rows);
            callback(err, rows);
        });
}
