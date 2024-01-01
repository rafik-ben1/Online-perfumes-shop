import Review from "../Models/Review.js"
import CustomError from "../utils/CustomError.js"
import asyncWrapper from "../utils/asyncWrapper.js"
const createReview = asyncWrapper(async function(req,res){
    const review = await Review.create({...req.body, author:req.user.id, product:req.params.productId})
    const rating = await Review.calculateRating(req.params.productId)

    return res.status(201).json({status:"success", data:review })
})
const getReviews = asyncWrapper(async function(req,res){

    const reviews = await Review.find({product:req.params.productId})
    res.status(200).json({status: "success", data:reviews })
})

const updateReview = asyncWrapper(async function(req,res){
    const review = await Review.findById(req.params.reviewId);
    console.log(review)
    if(!review){
        throw new CustomError("review not found",404)
    }
    if(req.user.id != review.author  ){
        throw new CustomError("it is not your review to edit buddy",403)
    }
    await review.$set(req.body)
    await review.save()
    const data = await  review.populate({path:"author", select:"name email avatar"})

    return res.status(201).json({status:"success", data })
})

const deleteReview = asyncWrapper(async function(req,res){
   const review = await Review.findOne({_id:req.params.reviewId})
   if(!review){
    throw new CustomError("no review found",404)
   }
   await review.deleteOne()
    return res.status(204).json({status:"success",message:"review deleted successfuly"})
})

export {createReview, getReviews,updateReview,deleteReview}