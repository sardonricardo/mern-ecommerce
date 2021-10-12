
const Product = require('../models/mongodb_products');


//Obtención para todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.json(products); 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}


//Obtención por id producto
const getProductById = async (req, res) => {

    try {

        let oneItem = await req.params.id
        const products = await Product.findById(oneItem); 
        res.json(products); 
        console.log(products)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"}); 
    }
}

module.exports = {
    getAllProducts,
    getProductById
}