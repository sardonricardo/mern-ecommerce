const router = require('express').Router();
const {
    getProducts 
} = require("../models/products_sql_Model");  
/* const products = require('../models/products_sql_Model') */
const api = require('../controllers/postgres_products_controllers')


// /api/makers/
router.get('/', api.products)



module.exports = router