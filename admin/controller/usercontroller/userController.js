var user = require('./user');
var db = require('../../../database/dbconnection');
var error = require('../../../entity/error');
var con = db.connection();
var constant = require('../../../config/constant');

exports.getAllUsers = (req, res) => {
    user.getAllUser(con, function (err, rows) {
        console.log(rows);
        if (!err) { res.json(rows); }
        else {
            res.status(500).send("Some thing went wrong!");
        }
    });
}
exports.deleteUser = (req,res)=>
{
    var iduser = req.params.iduser;
    console.log("delete User");
    const a = iduser;
    user.deleteUser(con,iduser,(err,rows)=>
{
    if(!err)
    {
        res.json({message:`User ${a} delete.`});
    }
    else 
    {
        res.status(401).json(new error.MyError(401, "Failed!!!"));
    }
});
}
