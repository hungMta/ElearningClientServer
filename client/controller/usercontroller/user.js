var constant = require('../../../config/constant');

exports.login = (con, email, password, callback) => {
    con.query(constant.SELECT_ALL_USER + " where email = '" + email + "' and password = '" + password + "'",
        function (err, rows, fields) {
            if (err) { console.log(err); }
            console.log(rows);
            callback(err, rows);
        });
}

exports.register = (con, userName, email, password, callback) => {
    var query = constant.REGISTER_USER + " ('" + userName + "', '" + email + "', '" + password + "');";
    console.log(query);
    con.query(query, (err, rows, fields) => {
        if (err) { console.log(err) }
        console.log(rows);
        this.login(con, email, password, (err, rows) => {
            callback(err, rows);
        })
    });
}

exports.checkEmail = (con, email, callback) => {
    con.query(constant.SELECT_ALL_USER + " where email = '" + email + "'",
        (err, rows, fields) => {
            if (err) { console.log(err) }
            console.log(rows);
            if (rows.length > 0) {
                callback(err, true);
            } else {
                callback(err, false);
            }
        }
    );
}