const express = require("express");
const router = express.Router();
const Product = require('../models/product.model.js');
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');
//without { } you'll import entire module , not just the one func

//get
router.get('/',getProducts);
router.get('/:id', getProduct);

//post
router.post('/', addProduct);

//put
router.put('/:id', updateProduct);

//delete
router.delete('/:id', deleteProduct);

module.exports = router;