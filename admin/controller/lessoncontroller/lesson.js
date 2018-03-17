var constants = require('../../../config/constant')

// 
 exports.getListLesson = (con,idcourse,callback) =>
{
    con.query(constants.SELECT_ALL_LESSON_OF_COURSE,[idcourse],
        function(err,rows,fields) {
            if(err){console.log(err);}
            console.log(rows);
            callback(err,rows);
     
    });
}

exports.updateLesson = (con, name, description, order, idlesson, callback) => {
    con.query(constants.UPDATE_LESSON, [name, description, order, idlesson],
        function (err, rows, fields) {
            if (err) { console.log(err); }
            console.log(rows);
            callback(err, rows);
        });
}

exports.insertLesson = (con, jsonLesson, callback) => {
    con.query(constants.INSERT_LESSON, jsonLesson,
        function (err, rows, fields) {

            if (err) {
                console.log(err);
            }
            console.log(rows);
            callback(err, rows);
        });
}
exports.deleteLesson = (con, idlesson,callback) => {
    con.query(constants.DELETE_LESSON +"'"+ idlesson+"'",
         function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
            console.log(rows);
            callback(err, rows);
        
    });
}

