import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        minLength : [3,"name must have more than 3 characters"],
        maxLength : [25,"name must have less than 25 characters"]

    },
    email :{
   type: String,
   required : true ,
   unique : true,
    },
    password : {
        type : String,
        required: true,
        minLength : 8,
        select : false
    },
    role:{
        type:String,
        enum : ["user", "admin"],
        default : "user"
    },
    avatar : {
        type : String,
        default : "https://res.cloudinary.com/dcn5gbxj2/image/upload/v1703619432/yuitg27vfc2xltcz9klv.jpg"
    }
},{versionKey:false})
userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(this.password, salt )
    this.password = hashed
} )

export default mongoose.model("User", userSchema )