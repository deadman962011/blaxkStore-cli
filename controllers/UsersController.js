
const request = require('request')


module.exports.SignInGet = function(req,res,next){

    res.render('SignInView')

}


module.exports.SignInPost = function(req,res,next){

var apiOps = {
    UserNameI:req.body.UsernameI,
    PasswordI:req.body.PasswordI,
}

request.post('http://127.0.0.1:3000/api/UserSignIn',{json:apiOps},function(err,response,body){
  
  if(body.message != null){
      res.render('SignInView',{message:body})
  }
  else{
      if(!req.session.User){
          req.session.User = {};
      }
      req.session.User= body;
      res.redirect('/')
  }
 

})

}






module.exports.SignUpGet= function(req,res,next){
   

res.render('signUpView');

}

module.exports.SignUpPost = function (req,res,next) {

  apiOptions={FirstNameI:req.body.FirstNameI,
               LastNameI:req.body.LastNameI,
               UserNameI:req.body.UsernameI,
               EmailI:req.body.EmailI,
               Password1I:req.body.PasswordI,
               Password2I:req.body.Password2I,
               AddressI:req.body.AddressI,
               PhoneNumI:req.body.PhoneNumI,
              
             };
    
request.post('http://127.0.0.1:3000/api/UserSignUp',{json:apiOptions},function(err,response,body){
   
if(!err){
    console.log(body)
    res.redirect('/')

}



})
}