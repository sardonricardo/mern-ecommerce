const Sequelize = require('sequelize')
const sequelize = require('./sql_products')


//Importamos también el model de productos, pues cada fabricante puede tener varios productos:
const Product = require('./products_sql_Model')

//Definimos el modelo de datos, con el define de Postgress:

const Maker = sequelize.define('makers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    CIF: {
        type: Sequelize.TEXT
    },
    address:
    {
        type: Sequelize.TEXT
    }
})

Maker.hasMany(Product, { foreingKey: 'makerId', sourceKey: 'id' }); 
Product.belongsTo(Maker, { foreingKey: 'makerId', sourceKey: 'id'}) //Muchos productos pertenecen a un solo fabricante. 

module.exports = Maker; 

