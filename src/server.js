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
app.get('/status', (req, res) => {
  res.send(req.rl)
})
// sssdsd
app.listen(process.env.PORT || 3000)