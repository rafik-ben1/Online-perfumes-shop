import multer from "multer";
import path, { dirname } from "path"
import { fileURLToPath } from "url";

export default function uploadFile(model){
    const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const multerStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,`../public/uploads/${model}`) )
    },
    filename:(req,file,cb)=>{ 
       let middlename = model === "users" ? req.user.id : req.body.title.replaceAll(" ","_")
        const ext = file.mimetype.split("/")[1] 
        cb(null,`${model}-${middlename}-${Date.now()}.${ext}`)
    }
})
const multetFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(new CustomError("please provide an image",400),false)
    }
    }
    const upload = multer({
        storage:multerStorage,
        fileFilter:multetFilter
    })
    return upload
}