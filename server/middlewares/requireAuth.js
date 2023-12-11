import User  from "../Models/User.js"
import CustomError  from "../utils/CustomError.js"
import jwt  from "jsonwebtoken"

function requireAuth(req,res,next){
    const {authorization} = req.headers
    if(!authorization || !authorization.startsWith("Bearer") ){
        next(new CustomError("Unauthorized provide token ! " , 401))
    }
    const token = authorization.split(" ")[1]
const user = jwt.verify(token , process.env.JWT_SECRET)
//req.user = {...user,id:new mongoose.Types.ObjectId(user.id)}
req.user=user
next()
}

function authorizeTo(...roles){
   return async function(req,res,next){
    const user =  await User.findById(req.user.id)
    if(!roles.includes(user.role)){
        return next(new CustomError("you are not allowed to perfurme this action !",403))
    }
    next()
   }
}


export {requireAuth, authorizeTo }