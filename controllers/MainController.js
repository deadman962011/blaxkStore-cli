const request = require('request')
const Cart = require('../models/cart')



module.exports.MainGet = function(req,res,next){

    request.get('http://127.0.0.1:3000/Api/ProdAll',{json:true},function(err,response,body){
        var products = body;
        var catigory = body;
        if (!req.session.cart) {

            return  res.render('MainView',{products:products,cart:null})
          }
   
          var cart = new Cart(req.session.cart);
          res.render('MainView', {products:products,cart:cart.getItems(), totalPrice: cart.totalPrice
          });



    })
}

module.exports.ProductOne = function(req,res,next){

    request.get('http://127.0.0.1:3000/api/ProdOne/'+req.params.id,{json:true},function(err,response,body){


       res.render('ProdOne',{Product:body})
    
    })

}

module.exports.ProdOnePost = function(req,res,next){

    console.log('post')

}


