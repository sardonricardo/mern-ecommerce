const model = require('../models/products_sql_Model')

const api = {
    products: async (req, res) => {
        try {
            const response = await model.getProducts()
            res.status(200).json(response.rows);
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: error.message
            
            });
        }
    },
}
module.exports = api