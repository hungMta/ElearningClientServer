var constants = require('../../../config/constant')
var db = require('../../../database/dbconnection')

exports.savePathway = (con, pathway, callback) => {

    var query = constants.INSERT_PATHWAY + " VALUES (" + pathway.iduser + ", " + pathway.idcourse + ", " + pathway.idlesson + ", " + pathway.score + ")"
    getPathway(con, pathway, (err, rows) => {
        if (!err) {
            if (rows.length > 0) {
                query = "UPDATE `pathway` SET `score`=" + pathway.score + " WHERE `idpathway`=" + rows[0].idpathway
            }
            db.queryDB(con, query, (err, rows) => {
                callback(err, rows)
            })
        } else {
            callback(err, null)
        }
    })
}

function getPathway(con, pathway, callback) {
    var query = constants.SELECT_ALL_PATHWAY + " where iduser = " + pathway.iduser + " and idcourse = "
        + pathway.idcourse + " and idlesson = " + pathway.idlesson
    db.queryDB(con, query, (err, rows) => {
        callback(err, rows)
    })
}

