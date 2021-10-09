const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('connection to Mongodb established'));



module.exports = mongoose;