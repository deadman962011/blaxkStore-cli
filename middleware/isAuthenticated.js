module.exports = function(req,res,next){

    if(req.session.User){
        res.redirect('/')
    }
    next();
}