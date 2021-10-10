const pool = require('../utils/dbpostgres');

const makers = {

    getMakers: async () => { //Funciona
        try {
            const res = await pool.query('SELECT * FROM makers');
            console.log(res.rows); 
            pool.end();
        } catch (e) {
            console.log(e)
        }
    },

    insertMaker: async (name, CIF, address) => { //Funciona
        try {
            const text = 'INSERT INTO makers(name, CIF, address) VALUES($1, $2, $3)'
            const values = ["BANG & OLUFSEN","A78801198","Avenida de Europa (pq Empresarial la Moraleja), 2, Alcobendas, 28108 , Madrid"] 
            
            const res = await pool.query(text, values); 
            console.log(res);
            pool.end()

        } catch (err) {
            console.log(err)
        }
    }

}

/*  makers.getMakers();   */
/* makers.insertMaker();  */