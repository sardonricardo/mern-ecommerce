const Products = require('../models/mongoProducts');

exports.create = (req, res) => {
    const product = new Product(req.body)
    product.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Ups! Something get wrong'
            })
        }
        res.json({data}); 
    })
}