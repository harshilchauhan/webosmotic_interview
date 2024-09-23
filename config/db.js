const mongoose = require('mongoose')
require('dotenv').config()

const mongo_url = process.env.MONGO_URL
mongoose.connect(mongo_url)
const db = mongoose.connection

db.on('connected',()=>{
    console.log('database connected..');
})

db.on('error',(error)=>{
    console.log(error);
})

module.exports=db