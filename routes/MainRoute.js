const express = require('express')




const  MainController =require('../controllers/MainController')

const router = express.Router();


router.get('/',MainController.MainGet)

router.get('/:id',MainController.ProductOne);

router.post('/:id',MainController.ProdOnePost)




module.exports = router;