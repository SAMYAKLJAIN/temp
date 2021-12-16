const express=require('express')
const app=express()
const cors = require('cors')


app.use(express.json())
app.use(cors());

const port=process.env.port || 8080;
app.listen(port,()=>console.log('listening port ${port}....'))