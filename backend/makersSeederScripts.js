require('dotenv').config();

const makerData = require('./data/makers');
const connectDB = require('./utils/dbMongoDB');
const Maker = require('./models/mongodb_makers')

connectDB();

const importData = async () => {
    try {
        await Maker.deleteMany({});
        await Maker.insertMany(makerData); //insertar datos de todo lo que está en el archivo data. 

        console.log('Data imported correctly');

        process.exit()
    } catch (error) {
        console.log(error)
        console.error("Error with data import"); 
        process.exit(1);    
        }
    }


importData(); 