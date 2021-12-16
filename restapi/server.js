require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/subscribers', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('connection sucess')).catch((err)=>console.log(err));


mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to mongodb "))

const subrouter = require('./routes/subscribers')
app.use('/subscribers', subrouter)




app.listen(3000, () => {


    console.log('Server 3000')
})