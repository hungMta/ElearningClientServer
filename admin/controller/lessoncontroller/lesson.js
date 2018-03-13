var constants = require('../../../config/constant')

// 
var getListLesson = function(con,callback)
{
    con.query(constants.SELECT_ALL_LESSON_OF_COURSE,function(err,row,fields)
    {
        try{
            console.log("query");
            if(err) console.log(err);
            callback(err,rows);

        }catch(error)
        {
            console.log("catch==");
        }
    })
    exports.getListLesson = getListLesson;

}