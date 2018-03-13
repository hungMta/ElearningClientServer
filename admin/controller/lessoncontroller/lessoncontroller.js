var lesson = require('./lesson')
exports.lessonList = (req,res)=>{
    console.log("Lesson list");
    lesson.getListLesson(con,function(err,rows){
        console.log(rows);
        if(!err){
        res.json(rows);}
        else{
            res.status(500).send("Oh uh, something went wrong");
        }
    });
}