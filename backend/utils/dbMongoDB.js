const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', error => console.log(error));

db.once('open', () => console.log('connection to db established'));


module.exports = mongoose; 


/* 
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('MongoDB connected')
    } catch (error){
        console.log(error)
        console.error('MongoDB connection failed')
        process.exit(1)
    }
}


module.exports = connectDB;   */