
var request = require('request');
var jwt = require('jsonwebtoken');


module.exports = function (req,res,next) {
    if (!req.session.User){
        console.log('not logged in');
        res.redirect('/Users/SignIn')
    }
    else{
    //
    var token = req.session.User.token;
    var verfiyToken = jwt.verify(token,'blaxkStore');
    console.log(verfiyToken)
    next();
    }

  


}