import mongoose from "mongoose"

const brandSchema = new mongoose.Schema({
    title :{
        type : String,
        required:true
    },
    image:{
        type:String,
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.model("Brand",brandSchema)