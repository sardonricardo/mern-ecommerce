//Importar las librerías
require('dotenv').config() //Para poder utilitzar el .env, 

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')

const app = express()
app.use(express.urlencoded({extended: true})) 
app.use(express.json())

//Métodos
const port = process.env.PORT || 3002     

app.listen(port, () => {     
        console.log(`Servidor corriendo en el puerto ${port}`)   
})

//database
require("./utils/dbMongoDB")
require("./utils/dbpostgres")

// Permisos de Cors
app.use(cors())


//Middlewares
app.use(morgan('dev'));


