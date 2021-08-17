const express = require('express')
const bodyParse = require('body-parser')
// https://stackoverflow.com/questions/66548302/body-parser-deprecated
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')


// app.use - setup configuration
const app = express()
app.use(express.urlencoded({extended: true})); 
app.use(morgan('combined'));
app.use(express.json());
app.use(cors())

require('./router')(app) // passing the app as parameter


sequelize.sync()
.then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)

})



app.listen(process.env.PORT || 3000)

// https://www.youtube.com/watch?v=_xUUdsHVyIg&list=PLRhWUdOnZHkkRn-colvhp4Z_q0yvXY12p