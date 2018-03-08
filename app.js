var express = require('./lib/node_modules/express');
var bodyParser = require('./lib/node_modules/body-parser');

var courseController = require('./controller/coursecontroller/courseController');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}))

app.get('/courses',courseController.coursesList);

var server = app.listen(8081,function(){
    var host = server.address().host;
    var port = server.address().port;

    console.log("Listening at http://%s:%s",host,port);
});