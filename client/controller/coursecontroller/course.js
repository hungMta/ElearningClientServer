var constants = require('../../../config/constant')
var db = require('../../../database/dbconnection')

exports.getCoursesList = (con, page, callback) => {
    con.query(constants.COUNT_COURSE, (err, row1, fields) => {
        if (err) console.log(err);
        console.log('###### ' + row1)
        var offset = (page - 1) * constants.LIMIT;
        var query = constants.SELECT_ALL_COURSE + " limit " + constants.LIMIT + " offset " + offset
        db.queryDB(con, query, (err, rows) => {
            callback(err, row1[0].count, rows);
        })
    })
}

exports.courseDetail = (con, iduser, idcourse, callback) => {
    var queryCourse = constants.SELECT_ALL_COURSES + " where idcourse = " + idcourse;
    db.queryDB(con, queryCourse, (err, rowsCourse) => {
        if (!err) {
            var query = 'select all_lesson.idlesson,all_lesson.name,all_lesson.description,all_lesson.order,all_lesson.idcourse ,my_lesson.islearned'
                + ' from (select * from lesson where idcourse = ' + idcourse + ') all_lesson  left join  '
                + '( select idlesson, COALESCE(1,0) islearned from pathway where idcourse = ' + idcourse + ' and iduser = ' + iduser + ') my_lesson'
                + ' on all_lesson.idlesson = my_lesson.idlesson'
            db.queryDB(con, query, (err, rowsLesson) => {
                rowsCourse.lessons = rowsLesson
                callback(err, rowsCourse);
            })
        } else {
            callback(err, null)
        }
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
    db.queryDB(con, query, (err, rows) => {
        callback(err, rows);
    })
}

exports.searchCourse = (con, page, name, callback) => {
    var query = ""
    if (!page) {
        query = constants.SELECT_ALL_COURSES + " where name like'%" + name + "%'";
    } else {
        offset = (page - 1) * constants.LIMIT;
        query = constants.SELECT_ALL_COURSES + " where name like'%" + name + "%'" + " limit " + constants.LIMIT + " offset " + offset
    }
    db.queryDB(con, constants.COUNT_COURSE + " where name like'%" + name + "%'", (err, row1, fields) => {
        if (err) callback(err, null)
        db.queryDB(con, query, (err, rows) => {
            callback(err, row1[0].count, rows);
        })
    })
}

