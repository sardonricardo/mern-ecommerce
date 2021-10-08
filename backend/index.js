//Importar las librerías
require('dotenv').config() //Para poder utilitzar el .env, 
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const session = require('express-session')


//Métodos
const port = process.env.PORT || 3002     

app.listen(port, () => {     
      console.log(`Servidor corriendo en el puerto ${port}`)   
})



//Middlewares



