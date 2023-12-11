import mongoose from "mongoose"
const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique: true 
    },
    price : {
        type: Number,
        required : true
    },
    stock : {
        type : Number,
        required: true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male","female", "uni"]
    },
    image : {
        type : String,
    },
    description : {
        type : String,
        required : true
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required : true
    },
  averageRating:{
    type:Number,
    default:0
  },
  totalRatings:{
    type: Number,
    default:0
  }
}, 
{toJSON:{virtuals:true}, toObject:{virtuals:true} }
)




ProductSchema.virtual("reviews",{
    ref:"Review",
    localField:"_id",
    foreignField:"product",  
})

// cant do this when getting many products :(

/*ProductSchema.virtual("averageRating").get(async function(){
    const reviews = this.reviews;
    const total = reviews.reduce((acc,curr)=> acc + curr.rating,0 )
    return total
})*/


ProductSchema.pre("findOne", function(next){
    this.populate("reviews")
    next()
} )
export default mongoose.model("Product", ProductSchema)