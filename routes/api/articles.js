const articleRouter = require("express").Router();

articleRouter.route("/").get(function(req,res,next){
    res.send("Oh shit! Waddup")
})

module.exports = articleRouter