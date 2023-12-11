import Brand from "../Models/Brand.js";
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
return res.status(200).json(brands)
})

const createBrand = asyncWrapper(async function(req,res){
  const image = `/uploads/brands/${req.file.filename}`
  console.log(req.file) 
  const brand = await Brand.create({...req.body, image}) 
  return res.status(201).json({status:"success", brand })
})

export {getBrands, createBrand}