var constants = require('../../../config/constant')

exports.getCoursesList = (con, callback) => {
    con.query(constants.SELECT_ALL_COURSE,(err, rows, fields) =>{
        try {
            if (err) console.log(err);
            callback(err, rows);
        } catch (error) {
        }
    })
}

exports.courseDetail = (con,idcourse, callback) => {
    var query = constants.SELECT_ALL_COURSE + " where course.idcourse = " + idcourse;
    console.log("##### " + query)
    con.query(query,(err,rows,fields) => {
        if(err) console.log(err);
        callback(err,rows);
    })
}

exports.myCourseDetail = (con,idcourse,iduser,callback)=>{
    var query = "select t4.iduser,course.idcourse,course.name,course.description,course.image,t4.total,t4.learned from course  " 
                +"inner join (select t2.iduser,t2.idcourse,t3.total,t2.learned "+ 
                "from (select iduser,idcourse, count(iduser) learned "+
                "from (select * from pathway where iduser = "+iduser+" and idcourse = "+idcourse+")t1 )t2 "+
                "inner join  (select  idcourse, count(idcourse) total "+
                "from (select * from lesson where idcourse = "+idcourse+")t2 ) t3 on t3.idcourse = t2.idcourse) t4 "
                +"on course.idcourse = t4.idcourse"
    console.log("##### " + query)
    con.query(query,(err,rows,fields) => {
    if(err) console.log(err);
    callback(err,rows);
    })
}