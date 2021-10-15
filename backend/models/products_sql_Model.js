const pool = require('../utils/dbpostgres'); 

const products = {

    getProducts: async () => {
        try {
            const res = await pool.query('SELECT * FROM products');
            console.log("query",res); 
            return res
    

        } catch (e) {
            console.log(e)
        }
    },

}; 

module.exports = products