import User from "../Models/User.js"
import { cloud } from "../index.js"
import CustomError from "../utils/CustomError.js"
import { toFilter, toPaginate, toSort } from "../utils/Query.js"
import asyncWrapper from "../utils/asyncWrapper.js"

export const updateProfile = asyncWrapper(async function(req,res){
    if(req.file) req.body.avatar = await cloud(req.file).url
    const {name,email,password,avatar}=req.body
    
    const user = await User.findByIdAndUpdate(req.user.id,{name,email,password,avatar},{runValidators:true,new:true})
    if(!user){
        throw new CustomError("no user found !" , 404)
    }
   return res.status(200).json({status:"success",data:user})
})
export const createUser = asyncWrapper(async function(req,res){
    const user = await User.create(req.body)
    return res.status(201).json({status:"success",user})
})
export const deleteUser = asyncWrapper(async function(req,res){
    const user = await findByIdAndDelete(req.params.userId)
    if(!user){
        return res.status(404).json({status:"fail",message:"no user found !"})
    }
    return res.status(204).json({status:"success"})
})
export const getUsers = asyncWrapper(async function(req,res){
    const queryObj = {...req.query}
    const {page,limit,sortBy} = req.query
    let query = toFilter(User,queryObj)
    query= toPaginate(toSort(query,sortBy),limit,page)
    const users = await query
    return res.status(200).json({status:"success",data:users})
})