import Product from "../Models/Product.js"
import { cloud } from "../index.js"
import CustomError from "../utils/CustomError.js"
import { toFilter, toPaginate, toSort } from "../utils/Query.js"
import asyncWrapper from "../utils/asyncWrapper.js"

export const createProduct = asyncWrapper(async function(req,res){
    console.log(req.body)
    const image = await cloud(req.file)
    req.body.image = image.url
    
    const product = await Product.create(req.body)
    return res.status(201).json({status:"success",data: product })
    
})

export const getProducts = asyncWrapper(async function(req,res){
    const {sortBy,page,limit} = req.query;
    let query = toFilter(Product,req.query)
    query= toSort(toPaginate(query,limit,page),sortBy)
const products = await query
    return res.status(200).json({status:"success", data:products })
})
export const getOneProduct = asyncWrapper(async function(req,res){
    const {productId} = req.params 
    const product = await Product.findOne({_id:productId})
    if(!product){
        return res.status(404).json({status:"fail", message: "no product found"  })
    }
    return res.status(200).json({status:"success", product} )
})

export const deleteProduct = asyncWrapper(async function(req,res){
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        throw new CustomError("no product found with the id provided!",404)
    }
    return res.status(204).json({status : "success"})
})

export const editProduct = asyncWrapper(async function(req,res){
    if(req.file) req.body.image =  (await cloud(req.file)).url
    const product = await Product.findByIdAndUpdate(req.params.id , req.body, {runValidators:true ,returnDocument:true} )
    if(!product){
      throw new CustomError("no brand found !" , 404)
    }
    return res.status(200).json({status: "success" , data :product})
})

