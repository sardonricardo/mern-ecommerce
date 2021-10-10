const Sequelize = require('sequelize')
const sequelize = require('./sql_products')

//Definimos el modelo de datos, con el define de Postgress:

const Product = sequelize.define('makers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    relevance: {
        type: Sequelize.TEXT
    },
    price:
    {
        type: Sequelize.TEXT
    },
    makerId: 
    {
        type: Sequelize.INTEGER
    }

})

module.exports =  Product; 
