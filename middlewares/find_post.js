var Post = require("../models/posts");
module.exports = function(req,res,next){
    Post.findById(req.params.id,function (err,post){
      if(post != null){
          res.locals.post = post;
          next();
      }else{
          res.redirect("/api");
      }
    })
}