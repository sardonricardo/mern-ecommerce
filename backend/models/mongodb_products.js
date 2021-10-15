const mongoose = require('mongoose')


const productSchema =  new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            require: true,
        },
        maker: {
            type: String,
            require: true, 
        },
        productImage: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        }
    },
    /* {timestamps: true} //Hora en la que creamos la categría.  */
)


module.exports =  mongoose.model("Products", productSchema)