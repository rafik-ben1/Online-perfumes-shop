import User from "../Models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import asyncWrapper from "../utils/asyncWrapper.js"
import CustomError from "../utils/CustomError.js"
export const register = asyncWrapper(  async function (req,res,next){
    const {name,password,email} = req.body
   
    const user = await User.create({name,password,email})

    const token = await jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:'2d'})
  const userDetail = {name: user.name , email : user.email,role : user.role,avatar:user.avatar}
    res.status(201).json({user :{...userDetail},token })
   
})

export const login = asyncWrapper(async function login(req,res){
    
        const user = await User.findOne({email : req.body.email }).select("+password").exec()
        if(!user){
            throw new CustomError("email not found!",404)
        }
        const isMatched = await bcrypt.compare(req.body.password, user.password )
        if(!isMatched){
           throw new CustomError("invalid password!",400)
        }
        const token  = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2d"})
     const userDetail = {name: user.name , email : user.email, role : user.role,avatar:user.avatar}
        res.status(200).json({user :{...userDetail},token })
        
   
    
})

