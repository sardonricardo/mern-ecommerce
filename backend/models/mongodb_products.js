const mongoose = require('mongoose')
const mongooseSerial = require("mongoose-serial")

const productSchema =  new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String,
            require: true,
        },
        relevance: {
            type: Number,
            unique: false, 
        },
        price: {
            type: Number,
            require: true,
        },
        imgUrl: {
            type: String,
            require: true
        },
        maker: {
            type: String,
            require: true
        }
    },
    {timestamps: true} //Hora en la que creamos la categría. 
)


module.exports =  mongoose.model("Products", productSchema)