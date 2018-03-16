var constants = require('../../../config/constant')

var getCoursesList = function (con, callback) {

    con.query(constants.SELECT_ALL_COURSES, function (err, rows, fields) {
   try {
            console.log("query");
            if (err) console.log(err);
            callback(err, rows);
        } catch (error) {
            console.log("cacth======================");
        }
    })
}

exports.updateCourse = (con,name,description,image, idcourse,callback)=>

{
    con.query(constants.UPDATE_COURSE + "name ='" +name +"' ,description = '" + description +"',image = '" + image+ "' where idcourse = " +idcourse, 
    function(err,rows,fields)
    {
        if(err) {console.log(err);}
        console.log(rows);
        callback(err,rows);
    });
}


exports.getCoursesList = getCoursesList;