const mongoose = require('mongoose')
const mongooseSerial = require("mongoose-serial")

const makerSchema =  new mongoose.Schema(
    {
        id: {
            type: Number 
        },
        name: {
            type: String,
            require: true,
            maxlength: 32, //número de caracteres
            unique:true //Categoría única. 
        },
        CIF: {
            type: String,
            require: true,
            maxlength: 32,
            unique: true
        },
        address: {
            type: String,
            require: true,
            maxlength: 250,
            unique: true
        }
    },
    {timestamps: true} //Hora en la que creamos la categría. 
)



module.exports =  mongoose.model("Makers", makerSchema)