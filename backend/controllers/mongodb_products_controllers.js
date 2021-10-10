const Product = require('../models/mongodb_products');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.json(products); 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}

const getProductById = async (req, res) => {

    try {
        const products = await Product.findById({}); 
        res.json(products); 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}

module.exports = {
    getAllProducts,
    getProductById
}

