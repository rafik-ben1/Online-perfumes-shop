import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    review : {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required:true,
        min:1,
        max:5
    },
    createdAt:{
        type: Date,
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
},{versionKey:false})
reviewSchema.statics.calculateRating = async function(id){
   
   const rating = await this.aggregate([
    {$match: {product: id }},
    {$group:{
        _id:null,
        number : {$sum : 1},
        average : {$avg : "$rating"}
    }}
   ])
   console.log(rating)
   const {average, number} = rating[0]
    
   await this.model("Product").findByIdAndUpdate(id,{averageRating:average, totalRatings:number })
    
}

reviewSchema.pre("find",function(next){
    this.populate({path:"author", select :"name email avatar" })
    next()
})

reviewSchema.pre("save",function(next){
    this.createdAt = Date.now()
    next()
})

reviewSchema.post("save",async function(){
await this.model("Review").calculateRating(this.product)
})

reviewSchema.post("deleteOne",{document:true}, async function(){
    await this.model("Review").calculateRating(this.product)
})
export default mongoose.model("Review", reviewSchema )