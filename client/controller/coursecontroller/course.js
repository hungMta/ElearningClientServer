var constants = require('../../../config/constant')

exports.getCoursesList = (con, callback) => {
    con.query(constants.SELECT_ALL_COURSE, function (err, rows, fields) {
        try {
            if (err) console.log(err);
            callback(err, rows);
        } catch (error) {
        }
    })
}
