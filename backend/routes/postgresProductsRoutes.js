const router = require('express').Router();
const {
    getProducts 
} = require("../models/products_sql_Model");  
const products = require('../models/products_sql_Model')


// /api/makers/
router.get('/', products.getProducts)



module.exports = router