const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtTokenVerify = (req,res,next)=>{
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({message:'Invalid token '})
    
    const token = authorization.split(' ')[1]
    if(!token) return res.status(401).json({message:'unauthorize User'})

    try {
        const decode = jwt.verify(token,process.env.jwt_secret_key)
        req.userPayLoad = decode
        next()
    } catch (error) {
        res.status(501).json({message:'Token not Found'})
    }
}

//generate a token
const generateToken = (userData)=>{
    return jwt.sign(userData,process.env.jwt_secret_key)
}

module.exports = {jwtTokenVerify,generateToken}