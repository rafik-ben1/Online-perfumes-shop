import express from "express"
import path, { dirname } from "path"
import { fileURLToPath } from "url";
const app = express();
dotenv.config()
const port = process.env.PORT || 8000;
import mongoose from 'mongoose'
import cors from 'cors'
import {v2 as cloudinary} from "cloudinary"
// routers
import UserRouter from "./Routers/UserRouter.js"
import productRouter from "./Routers/ProductRouter.js"
import authRouter from "./Routers/AuthRouter.js"
import BrandRouter from "./Routers/BrandRouter.js"
import ReviewRouter from "./Routers/ReviewRouter.js"
import OrderRoutes from "./Routers/OrderRouter.js"
//middelwares || utils
import CustomError from "./utils/CustomError.js"
import dotenv from "dotenv";
import errorMiddleware from './middlewares/errorMiddleware.js';
import dns from "dns" ;
import { promises } from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())
  cloudinary.config({api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
  cloud_name:process.env.CLOUD_NAME})

export async function cloud (file){
  const result = await cloudinary.uploader.upload(file.path, {
      folder: 'uploads', 
      public_id: file.filename, 
    });
await promises.unlink(file.path)
return result

}
const customDnsServer = '8.8.8.8';
dns.setServers([customDnsServer])
// database connection



mongoose.connect(process.env.MONGO).then(console.log('connected to database')).catch(err => console.log(err))

app.use(cors())


//static files


app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use("/users",UserRouter)

app.use("/products",productRouter)

app.use("/auth",authRouter)

app.use("/brands", BrandRouter )

app.use("/reviews",ReviewRouter)

app.use("/orders",OrderRoutes)

app.all("*", function(req,res){
  throw new CustomError("route not found",404)
} )

app.use(errorMiddleware)
    
      app.listen(port, () => console.log(`Server is listening on port ${port}...`) );
   
  
  
  
