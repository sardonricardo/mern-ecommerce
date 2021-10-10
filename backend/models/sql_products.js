const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'demo1234',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging:false //Para evitar mensajes en consola.
    }
)

module.exports = sequelize