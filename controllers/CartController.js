const request = require('request')
var Cart = require('../models/cart')






module.exports.cartAdd = function (req,res,next) {



    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    request.get("http://127.0.0.1:3000/api/ProdOne/"+productId,{json:true},function(err,response,body){
    var product = body;
    var prodId=body._id;
     cart.add(product, prodId);
     req.session.cart = cart;
  
     res.redirect('/');
    });




}

module.exports.cartRemove=function (req,res,next) {
    
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
  
    cart.remove(productId);
    req.session.cart = cart;
   
    
    res.redirect('/');

}


module.exports.cartCheckOut = function(req,res,next){
 

        if (!req.session.cart) {

            res.redirect('/')
            }
            else{
                
              var cart = new Cart(req.session.cart);
              console.log(cart.getItems())
              res.render('checkOutView', {cart:cart.getItems(), totalPrice: cart.totalPrice});
        
            }

    




}

module.exports.cartCheckOutPost = function(req,res,next){

    if(!req.session.User){
        res.redirect('/Users/signIn')
    }
    var cart= new Cart(req.session.cart);
    var arr = cart.getItems();
    var string = toString(arr)
    console.log(string)
  

    var apiOps = {
        UserName:req.session.User.UserName,
        cart:cart.getItems(),
        Address:req.body.AddressI,
        PhoneNum:req.body.PhoneI,

        
    }
      
    request.post('http://127.0.0.1:3000/api/orderSave',{json:apiOps},function(err,response,body){
    
    
    res.redirect('/')

    })


}