var constants = require('../../config/constant')

var getCoursesList = function(con,callback){
    con.query(constants.SELECT_ALL_COURSE,function(err,rows,fields){
        if(err) throw err;
        callback(err,rows);
    })
}

exports.getCoursesList = getCoursesList;