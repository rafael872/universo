var User = require("../models/user").User;

module.exports = function(req,res,next){
    if(!req.session.user_id) {
        res.redirect("/login")

    } else {
        User.findById(req.session.user_id,function (err,user) {
            if(err){
                console.log("error en session");
                res.redirect("/login");
                return
            }
                res.locals={ user:user};
                next();

        })

    }
}