//Importar las librerías
require('dotenv').config() //Para poder utilitzar el .env, 
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const router = require('./routes/router')
const router_api = require('./routes/router_api')
const mongoProductsRoutes = require('./routes/mongoProductsRoutes')

const app = express()
app.use(express.urlencoded({extended: true})) 
app.use(express.json())

//Métodos
const port = process.env.PORT || 3002     

app.listen(port, () => {     
        console.log(`Servidor corriendo en el puerto ${port}`)   
})


//Middlewares
app.use(morgan('dev'));

//database
require("./utils/dbMongoDB")
require("./utils/dbpostgres")

// Permisos de Cors
app.use(cors())

// Routes
app.use('/', router)
app.use('/api', router_api);
app.use('/api/products', mongoProductsRoutes)

/* app.use('/api', router_api); */



