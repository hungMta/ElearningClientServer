var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');
var courseController = require('./client/controller/coursecontroller/courseController');
var userController = require('./client/controller/usercontroller/userController');
var PORT = process.env.PORT || 5000;

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}))

app.get('/courses',courseController.coursesList);
app.post('/login',userController.login);
app.post('/register',userController.register);

var server = app.listen(PORT,function(){
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s",host,PORT);
});