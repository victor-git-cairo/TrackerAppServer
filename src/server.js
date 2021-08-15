const express = require('express')
const bodyParse = require('body-parser')
// https://stackoverflow.com/questions/66548302/body-parser-deprecated
const cors = require('cors')
const morgan = require('morgan')


// app.use - setup configuration
const app = express()
app.use(express.urlencoded({extended: true})); 
app.use(morgan('combined'));
app.use(express.json());
app.use(cors())

//endpoints
app.post('/register', (req, res) => {
  res.send({
    message: `The user ${req.body.email} is now registered`
  })
})
// sssdsd
app.listen(process.env.PORT || 3000)