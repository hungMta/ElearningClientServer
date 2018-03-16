module.exports = Object.freeze({
    SELECT_ALL_USER: 'SELECT * FROM sql12225900.user',
    SELECT_ALL_COURSE: 'select course.idcourse, course.name, course.image,course.description ,coalesce(t1.number,0) number from (select count(iduser) as number  ,idcourse from enroll group by idcourse) t1 right join course on course.idcourse = t1.idcourse ',
    REGISTER_USER: "INSERT INTO sql12225900.user (name, email,password) VALUES ",
    MY_COURSE: "select my_course_lesson.iduser,my_course_lesson.idcourse,my_course_lesson.name,my_course_lesson.image,my_course_lesson.total, COALESCE(my_all_pathway.learned,0)as learned from (select my_course.iduser,my_course.idcourse,my_course.name,my_course.image, course_lesson.total from (select myEnroll.iduser,myEnroll.idcourse,course.name,course.image  from (select * from enroll where iduser = 2) myEnroll     inner join course on course.idcourse = myEnroll.idcourse ) my_course inner join (select lesson.idcourse, count(idcourse) total from lesson group by idcourse ) course_lesson on my_course.idcourse = course_lesson.idcourse) my_course_lesson left join (select my_pathway.idcourse, count(my_pathway.idcourse) learned from (select * from pathway where pathway.iduser = 2) my_pathway group by my_pathway.idcourse) my_all_pathway on my_course_lesson.idcourse = my_all_pathway.idcourse",
    MY_PROFILE: "select user.iduser,user.name,user.avatar,user.email,user.phone,user.address,learned.word_learned,learned.scored from user inner JOIN (SELECT iduser, SUM(my_pathway.total_words) word_learned, SUM(my_pathway.score) scored  from (select my_pre_pathway.idpathway, my_pre_pathway.iduser,my_pre_pathway.idcourse,my_pre_pathway.idlesson,my_pre_pathway.score , COALESCE(lesson_word.total_words,0 ) total_words from (select * from pathway where iduser = 2) my_pre_pathway left join (select word.idlesson, count(idlesson) total_words  from word group by idlesson) lesson_word on my_pre_pathway.idlesson = lesson_word.idlesson) my_pathway) learned on user.iduser = learned.iduser",
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    USER_NOT_FOUND: 'User not found',
    COURSE_NOT_FOUND: 'Course not found',
    USER_EXISTS: 'User exists',
    REGISTERD_SUCCESSFULLY: 'Registerd successfully',
    COUNT_COURSE:'select count(*) count from course',
    LIMIT: 20,


    SELECT_ALL_WORD:'select * from word',
    SELECT_ALL_LESSON:'select * from lesson',
    INSERT_PATHWAY:'INSERT INTO `sql12225900`.`pathway` (`iduser`, `idcourse`, `idlesson`, `score`)',
    SELECT_ALL_PATHWAY:'Select * from pathway ',
    SUCCESS:"Success!",
    // SELECT_ALL_COURSE: 'SELECT * FROM sql12225900.course',

    SELECT_ALL_LESSON_OF_COURSE: 'SELECT *FROM sql12225900.lesson WHERE idcourse =  ',
    BAD_REQUEST:'Bad request',
    SELECT_ALL_QUESTION:'select * from question',


    // admin

    SELECT_ALL_USERS: 'SELECT *FROM sql12225900.user',
    DELETE_USER: 'DELETE sql12225900.user WHERE iduser =',


    SELECT_ALL_COURSES: 'SELECT * FROM sql12225900.course',
    
    SELECT_ADMIN : 'SELECT *FROM sql12225900.admin',
    ADMIN_NOT_FOUND: 'Admin not found!',

    INSERT_COURSE:'INSERT INTO  sql12225900.course(name,description,subcribers,image,totalTime) values',
    UPDATE_COURSE:'UPDATE sql12225900.course SET',
    DELETE_COURSE:'DELETE sql12225900.course WHERE',

    DELETE_LESSON: 'DELETE sql12225900.lesson WHERE idlesson='


});

