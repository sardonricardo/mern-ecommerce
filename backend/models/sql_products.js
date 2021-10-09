const pool = require('../utils/dbpostgres.js');

const products  = {

    createProduct: async (name, price, img, id_maker, relevance) =>  {

    let client, result

    try {
        client = await pool.connect();
        result = await client.query(`
        INSERT INTO products (name, price, img, id_maker, relevance)
        VALUES ($1,$2,$3,$4,$5)
        `, [name, price, img, id_maker, relevance]);


    } catch (err) {
        console.log(err);

        }finally {
            client.release();
        }
    }
}

products.createProduct('Botas','320€', '', '1', 'important');