const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductById, 
} = require("../controllers/mongodb_products_controllers"); 

//GET all products form db
//GET /api/produts
// Public
router.get('/', getAllProducts); 

//GET all products by Id from db
//GET /api/produts/:id
// Public
router.get('/:id', getProductById); 

module.exports = router