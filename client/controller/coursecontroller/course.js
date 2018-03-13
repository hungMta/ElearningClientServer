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

exports.myALLCourse = (con,iduser,callback)=>{
    var query = "select my_course_lesson.iduser,my_course_lesson.idcourse,my_course_lesson.name,my_course_lesson.image,my_course_lesson.total, COALESCE(my_all_pathway.learned,0)as learned "
    +"from (select my_course.iduser,my_course.idcourse,my_course.name,my_course.image, course_lesson.total "
    +"from (select myEnroll.iduser,myEnroll.idcourse,course.name,course.image "
    +"from (select * from enroll where iduser = "+iduser+") myEnroll "
    +"inner join course on course.idcourse = myEnroll.idcourse ) my_course "
    +"inner join (select lesson.idcourse, count(idcourse) total from lesson group by idcourse ) course_lesson "
    +"on my_course.idcourse = course_lesson.idcourse) my_course_lesson "
    +"left join (select my_pathway.idcourse, count(my_pathway.idcourse) learned "
    +"from (select * from pathway where pathway.iduser = "+iduser+") my_pathway group by my_pathway.idcourse) my_all_pathway "
    +"on my_course_lesson.idcourse = my_all_pathway.idcourse "
    console.log("##### " + query)
    con.query(query,(err,rows,fields) => {
    if(err) console.log("err ==== " + err);
    callback(err,rows);
    })
}