const jwt = require("jsonwebtoken")

const authmiddleware = (req,res,next)=>{

    const  authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"access denied. No tooken"})
    }

    try{
    
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = decoded
            next()
    }catch(error){
        return res.status(401).json({message:"INVALID TOKEN"})
    }
}
module.exports = authmiddleware ;