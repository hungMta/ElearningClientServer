var user = require('./user');
var db = require('../../../database/dbconnection');
var error = require('../../error');
var con = db.connection();
var constant = require('../../../config/constant');

exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    user.login(con, email, password, (err, rows) => {
        if (!err) {
            if (rows.length == 0) {
                res.status(401).json(new error.MyError(401, constant.USER_NOT_FOUND));
            }
            if (rows.length > 0) {
                res.json(rows[0]);
            }
        } else {
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR));
        }
    });
}

exports.register = (req, res) => {
    var userName = req.body.user_name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(userName + " / " + email + " / " + password);
    user.checkEmail(con, email, (err, isExist) => {
        if (!err) {
            if (!isExist) {
                user.register(con, userName, email, password, (err, rows) => {
                    if (!err) {
                        var result = { "result": "" + constant.REGISTERD_SUCCESSFULLY + "","user": rows[0] };
                        res.json(result);
                    } else {
                        res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR));
                    }
                });
            } else {
                res.status(400).json(new error.MyError(400, constant.USER_EXISTS));
            }
        } else {
            res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR));
        }
    });

}

exports.userInfo = (req,res) => {
    var iduser = req.query.id_user
    console.log("###### userInfo")    
    console.log("###### " + iduser)
    if(iduser){
        user.userInfo(con,iduser,(err,rows)=>{
            if (!err) {
                res.json(rows[0]);
            } else {
                res.status(500).json(new error.MyError(500, constant.INTERNAL_SERVER_ERROR));
            }
        })
    }else{
        res.status(400).json(new error.MyError(400, constant.USER_NOT_FOUND))
    }
}