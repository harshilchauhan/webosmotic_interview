const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true,minlength:3,maxlength:15},
    email:{type:String,required:true,unique:true},
    contactnumber:{type:String,required:true,unique:true},
})

module.exports = mongoose.model('contact',contactSchema)
