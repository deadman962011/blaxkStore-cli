const express = require('express');
const pug = require('pug');
const morgan = require('morgan');
const path = require('path');
var session = require('express-session');
const app = express();



//require route files

const mainRoutes =require('./routes/MainRoute');
const UsersRoutes = require('./routes/UsersRoute')
const CartRoutes = require('./routes/CartRoutes')
//


// app managment
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'storeCli',
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});




//




//routes managment
app.use('/',mainRoutes);
app.use('/Cart',CartRoutes);
app.use('/Users',UsersRoutes)

app.listen(4000,function (err) {

    if(!err){
      console.log('store cli connected on 4000');
    }
    
    })
    