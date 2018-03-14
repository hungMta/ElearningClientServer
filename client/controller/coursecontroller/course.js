var constants = require('../../../config/constant')
var db = require('../../../database/dbconnection')

exports.getCoursesList = (con, page, callback) => {
    con.query(constants.COUNT_COURSE, (err, row1, fields) => {
        if (err) console.log(err);
        console.log('###### ' + row1)
        var offset = (page - 1) * constants.LIMIT;
        var query = constants.SELECT_ALL_COURSE + " limit " + constants.LIMIT + " offset " + offset
        console.log("##### " + query)
        db.queryDB(con,query,(err,rows)=>{
            callback(err, row1[0].count, rows);
        })
    })
}

exports.courseDetail = (con, idcourse, callback) => {
    var query = constants.SELECT_ALL_COURSE + " where course.idcourse = " + idcourse;
    console.log("##### " + query)
    db.queryDB(con,query,(err,rows)=>{
        callback(err, rows);
    })
}

exports.allMyCourse = (con, iduser, callback) => {
    var query = "select my_course_lesson.iduser,my_course_lesson.idcourse,my_course_lesson.name,my_course_lesson.image,my_course_lesson.total, COALESCE(my_all_pathway.learned,0)as learned "
        + "from (select my_course.iduser,my_course.idcourse,my_course.name,my_course.image, course_lesson.total "
        + "from (select myEnroll.iduser,myEnroll.idcourse,course.name,course.image "
        + "from (select * from enroll where iduser = " + iduser + ") myEnroll "
        + "inner join course on course.idcourse = myEnroll.idcourse ) my_course "
        + "inner join (select lesson.idcourse, count(idcourse) total from lesson group by idcourse ) course_lesson "
        + "on my_course.idcourse = course_lesson.idcourse) my_course_lesson "
        + "left join (select my_pathway.idcourse, count(my_pathway.idcourse) learned "
        + "from (select * from pathway where pathway.iduser = " + iduser + ") my_pathway group by my_pathway.idcourse) my_all_pathway "
        + "on my_course_lesson.idcourse = my_all_pathway.idcourse "
    console.log("##### " + query)
    db.queryDB(con,query,(err,rows)=>{
        callback(err, rows);
    })
}

exports.searchCourse = (con, name, callback) => {
    var query = "";

}
