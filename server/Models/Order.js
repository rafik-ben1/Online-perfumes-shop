import mongoose from "mongoose";

const cartItem = new mongoose.Schema({
    product :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1,
        max:5
    }
})

const orderSchema = new mongoose.Schema({
    cart : {
        type:[cartItem],
        required:true
    },
    orderedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: String,
        enum:["pending","paid","delivered","canceled"],
        default:"pending",
        lowerCase:true,
    },
    address:{
        type:String,
        required: true
    },
    telephone:{
        type:String,
        required:true
    }
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}})



orderSchema.pre(/^find/,function(){
    this.populate("cart")
})

orderSchema.pre("findOne", function(){
    this.populate({path:"orderedBy", select:"name"})
} )

orderSchema.virtual("total").get(function(){
    return this.cart.reduce((acc,curr)=>acc + (curr.price * curr.quantity),0)
})

orderSchema.pre("save", async function(){
    let productPromises = []
 if(this.isNew){
     productPromises = this.cart.map(async (item) => {
        const product = await this.model("Product").findOne({ _id: item.product })
        if (product) {
          product.stock -= item.quantity
          await product.save()
        }
      });
 }
 if(productPromises.length > 0 ){
    await Promise.all(productPromises)
 }
})
orderSchema.post("save", async function () {
    let productPromises =[]
    if (this.status==="canceled") {
      productPromises = this.cart.map(async (item) => {
        const product = await this.model("Product").findOne({ _id: item.product })
        if (product) {
          product.stock += item.quantity
          await product.save()
        }
      });
    }
 
    if(productPromises.length >0 ) await Promise.all(productPromises);
    
  });

 

export default mongoose.model("Order", orderSchema)