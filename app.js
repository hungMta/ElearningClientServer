var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');
var PORT = process.env.PORT || 5000
var courseController = require('./client/controller/coursecontroller/courseController');
var lessonController = require('./admin/controller/lessoncontroller');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }))

app.get('/courses', courseController.coursesList);


app.get('/lessons', lessonController.lessonController);

var server = app.listen(PORT, function () {
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, PORT);
});