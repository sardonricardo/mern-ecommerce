const pg = require('pg') // Pool se usa para la conexión, y permite tener varias conexiones

const pool =  new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'demo1234',
    database: 'ecommerce',
});

pool.connect()
.then(client => console.log('connection to PostGres established'))
.catch(error => console.log(error))

console.log('Hola')

module.exports = pool