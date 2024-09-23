const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./config/db')
const port = process.env.PORT
const {jwtTokenVerify} = require('./middleware/jwtAuth')

const userRoute=require('./routes/userRoute')
const contactRoute=require('./routes/contactRoute')
app.use('/api',userRoute)
app.use('/api/contact',jwtTokenVerify,contactRoute)

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})