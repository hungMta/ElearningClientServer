var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');
var PORT = process.env.PORT || 5000
var courseController = require('./client/controller/coursecontroller/courseController');
var userController = require('./client/controller/userController/userController');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}))

app.get('/courses',courseController.coursesList);
app.post('/login',userController.login)
var server = app.listen(5000,function(){
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s",host,PORT);
});