import Brand from "../Models/Brand.js";
import { cloud } from "../index.js";
import CustomError from "../utils/CustomError.js";
import { toFilter, toPaginate, toSort } from "../utils/Query.js";
import asyncWrapper from "../utils/asyncWrapper.js";

const getBrands = asyncWrapper(async function(req,res){
let queryObj = {...req.query}
    let query = toFilter(Brand,queryObj)
    const {limit,page,sortBy}=queryObj
    query = toSort(toPaginate(query,limit,page),sortBy)
    const brands = await query  
if(!brands) throw new CustomError("no brands yet",404)
return res.status(200).json({status:"success",data:brands})
})

const createBrand = asyncWrapper(async function(req,res){
  console.log(req.file)
const image = await cloud(req.file)
 
  const brand = await Brand.create({...req.body, image:image.url}) 
  return res.status(201).json({status:"success",data: brand })
})

const editBrand = asyncWrapper(async function(req,res){
  if(req.file) req.body.image =  (await cloud(req.file)).url
  const brand = await Brand.findByIdAndUpdate(req.params.id , req.body, {runValidators:true ,returnDocument:true} )
  if(!brand){
    throw new CustomError("no brand found !" , 404)
  }
  return res.status(200).json({status: "success" , data :brand})
})

const deleteBrand = asyncWrapper(async function(req,res){
  const brand = await Brand.findByIdAndDelete(req.params.id)
  if(!brand){
    throw new CustomError("no brand found !",404)
  }
  return res.status(204).json({status:"success"})
})

export {getBrands, createBrand , editBrand, deleteBrand}