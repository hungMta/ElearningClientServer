var db = require('../../../database/dbconnection');
var constant = require('../../../config/constant');
var error = require('../../../entity/error');
var pathway = require('./pathway')
var pathwayObj = require('../../../entity/Pathway')
var con = db.connection();

exports.savePathway = (req,res) => {
    pathway.savePathway(con,req.body,(err,rows) => {
        if(!err){
            res.json(constant.SUCCESS)
        }else{
            res.status(400).json(new error.MyError(400,null,err))
        }
    })
}

