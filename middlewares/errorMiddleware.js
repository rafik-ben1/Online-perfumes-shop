import CustomError from "../utils/CustomError.js"

export default function(err,req,res,next){
    console.error(err)
    if(err instanceof CustomError ){
        return res.status(err.statusCode).json({status : 'fail' , message : err.message})
    }
    if(err.name === "ValidationError"){
        if(err.code === 11000){
            return res.status(400).json({staus : "fail" , message:`${Object.values(err.keyValue)} already in use ` })
        }
        return res.status(400).json({status:"fail" , message : err.message, err})

    }
return res.status(500).json(err.message)
}