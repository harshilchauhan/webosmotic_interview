// username,password,email,age,contactnumber,address

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true,minlength:3,maxlength:10},
    password:{type:String,required:true,minlength:5},
    email:{type:String,required:true,unique:true},
    

})

userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        try {
            const saltnumber=10
            user.password=await bcrypt.hash(user.password,saltnumber)
        } catch (error) {
            return next(error)
        }
    }
    next()
})

module.exports = mongoose.model('User',userSchema)