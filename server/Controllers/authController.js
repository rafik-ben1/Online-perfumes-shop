import User from "../Models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import asyncWrapper from "../utils/asyncWrapper.js"
export const register = asyncWrapper(  async function (req,res,next){
    console.log(req.body)
   
    const user = await User.create(req.body)

    const token = await jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:'2d'})
  const userDetail = {name: user.name , email : user.email}
    res.status(201).json({user :{...userDetail},token })
   
})

export async function login(req,res){
    try {
        const user = await User.findOne({email : req.body.email }).exec()
        if(!user){
            return res.status(400).json({error: 'Invalid email'})
        }
        const isMatched = await bcrypt.compare(req.body.password, user.password )
        if(!isMatched){
            return res.status(400).json({error : "wrong password!"})
        }
        const token  = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2d"})
     const userDetail = {name: user.name , email : user.email}
        res.status(200).json({user :{...userDetail},token })
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

