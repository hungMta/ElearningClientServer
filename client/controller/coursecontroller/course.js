var constants = require('../../../config/constant')

var getCoursesList = function(con,callback){
    con.query(constants.SELECT_ALL_COURSE,function(err,rows,fields){
        try {
        if(err) throw err;
        console.log("call back");
        callback(err,rows);
        } catch (error) {
        callback(err,rows);
        }
        
    })
}

exports.getCoursesList = getCoursesList;