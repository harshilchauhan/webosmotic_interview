const User = require('../model/userModel')
const comparePassword = require('../middleware/comparePassword')
const { generateToken } = require('../middleware/jwtAuth')


const registerUser = async(req,res)=>{
    try {
        const {username,password,email} = req.body
        const newUser = new User({username:username,password:password,email:email})
        const response = await newUser.save()
        res.status(200).json({response:response,message:'User register Successfully..'})
    } catch (error) {
        res.status(501).json({message:'internal server error.'}) 
    }
}


const loginUser = async(req,res)=>{
    try {
        const {username,password} = req.body
        const user = await User.findOne({username:username})
        if(!user) return res.status(401).json({message:'username invalid'})

        const isMatch= await comparePassword(password,user.password)
        if(!isMatch) return res.status(401).json({message:'password invalid'})
        
        const payLoad = {id:user.id,username:user.username}
        const token = generateToken(payLoad)
        res.status(200).json({message:'User login Sucess..',token:token})
    } catch (error) {
        res.status(501).json({message:'internal server error.'}) 
    }
}

module.exports={
    registerUser,
    loginUser
}