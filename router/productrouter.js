const express = require('express');
const Product =require("../module/productModel.js")
const {getProducts, getProduct, postProducts, updateProducts, deleteProducts} = require('../controller/productControler.js')
const router= express.Router();

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/',postProducts)

router.put('/:id', updateProducts)

router.delete('/', deleteProducts)


module.exports = router;