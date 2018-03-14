var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');
var courseController = require('./client/controller/coursecontroller/courseController');
var lessonController = require('./admin/controller/lessoncontroller/lessoncontroller');
var userController = require('./client/controller/usercontroller/userController');
// admin
var adminController = require('./admin/controller/admincontroller/admincontroller')
var PORT = process.env.PORT || 5000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }))


// client
app.get('/courses', courseController.coursesList);
app.post('/login', userController.login);
app.post('/register', userController.register);
app.get('/my_courses', courseController.myCourse);
app.get('/user_info', userController.userInfo);
app.post('/admin/login', adminController.login);

//app.get('/lessons', lessonController.lessonController);


var server = app.listen(PORT, function () {
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, PORT);
});