
const pool = require('../utils/dbpostgres'); 

const products = {

    getProducts: async () => {
        try {
            const res = await pool.query('SELECT * FROM products');
            
            console.log(res.rows); 
            pool.end();

        } catch (e) {
            console.log(e)
        }
    }

}; 

products.getProducts(); 