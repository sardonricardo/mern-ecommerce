require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./utils/dbMongoDB');
const Product = require('./models/mongodb_products')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData); //insertar datos de todo lo que está en el archivo data. 

        console.log('Data imported correctly');

        process.exit()
    } catch (error) {
        console.log(error)
        console.error("Error with data import"); 
        process.exit(1);    
        }
    }


importData(); 