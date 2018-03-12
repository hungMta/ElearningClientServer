var constant = require('../../../config/constant');

exports.login = (con, email, password, callback) => {
    con.query(constant.SELECT_ALL_USER + " where email = '" + email + "' and password = '" + password + "'",
        function (err, rows, fields) {
            if (err) { console.log(err); }
            console.log(rows);
            callback(err, rows);
        });
}