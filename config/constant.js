module.exports = Object.freeze({
    SELECT_ALL_USER: 'SELECT * FROM sql12225900.user',
    SELECT_ALL_COURSE: 'select t1.idcourse, course.name, course.image,course.description ,t1.number from (select count(iduser) as number  ,idcourse from enroll group by idcourse) t1 inner join course on course.idcourse = t1.idcourse ',
    REGISTER_USER: "INSERT INTO sql12225900.user (name, email,password) VALUES ",
    MY_COURSE:"select t4.iduser,course.idcourse,course.name,course.description,course.image,t4.total,t4.learned from course  inner join (select t2.iduser,t2.idcourse,t3.total,t2.learned  from (select iduser,idcourse, count(iduser) learned from (select * from pathway where iduser = 2 and idcourse = 1)t1 )t2 inner join  (select  idcourse, count(idcourse) total from (select * from lesson where idcourse = 1)t2 ) t3 on t3.idcourse = t2.idcourse) t4 on course.idcourse = t4.idcourse",
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    USER_NOT_FOUND: 'User not found',
    COURSE_NOT_FOUND:'Course not found',
    USER_EXISTS: 'User exists',
    REGISTERD_SUCCESSFULLY: 'Registerd successfully'
});

