const express = require('express')
const checkToken = require('../middleware/checkToken')

const router = express.Router();
const CartController = require('../controllers/CartController')

router.get('/Add/:id',CartController.cartAdd);

router.get('/Remove/:id',CartController.cartRemove)

router.get('/CheckOut',checkToken,CartController.cartCheckOut);

router.post('/CheckOut',checkToken,CartController.cartCheckOutPost);









module.exports = router;