var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');
var cors = require('./lib/node_modules/cors')
var courseController = require('./client/controller/coursecontroller/courseController');
var lessonController = require('./admin/controller/lessoncontroller/lessoncontroller');
var userController = require('./client/controller/usercontroller/userController');
var lessonClientController  = require('./client/controller/lessoncontroller/lessonController');
var pathwayController = require('./client/controller/pathwaycontroller/pathwayController')
// admin
var adminController = require('./admin/controller/admincontroller/admincontroller');
var courseAdminController = require('./admin/controller/coursecontroller/courseController');
var PORT = process.env.PORT || 5000;
var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }))


// client
app.get('/courses', courseController.coursesList)
app.post('/login', userController.login)
app.post('/register', userController.register)
app.get('/my_courses', courseController.myCourse)
app.get('/user_info', userController.userInfo)
app.get('/lesson',lessonClientController.getLesson)
app.get('/question',lessonClientController.getQuesion)
app.get('/search_course',courseController.searchCourse)
app.post('/save_pathway',pathwayController.savePathway)
app.get('/course',courseController.courseDetail)
app.put('/enroll',courseController.enrollCourse)
app.put('/quit_course',courseController.quitCourse)
app.post('/admin/login', adminController.login)

app.get('/admin/courses',courseAdminController.coursesList);
//app.get('/lessons', lessonController.lessonController);


var server = app.listen(PORT, function () {
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, PORT);
});