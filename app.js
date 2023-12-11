import express from "express"
const app = express();
const port = process.env.PORT || 8000;
import mongoose from 'mongoose'
import cors from 'cors'
// routers
import UserRouter from "./Routers/UserRouter.js"
import productRouter from "./Routers/ProductRouter.js"
import authRouter from "./Routers/AuthRouter.js"
import BrandRouter from "./Routers/BrandRouter.js"
import ReviewRouter from "./Routers/ReviewRouter.js"
import OrderRoutes from "./Routers/OrderRouter.js"
//middelwares || utils
import CustomError from "./utils/CustomError.js
import dotenv from "dotenv";
import errorMiddleware from './middlewares/errorMiddleware.js';
import dns from "dns" ;
dotenv.config()



const customDnsServer = '8.8.8.8';
dns.setServers([customDnsServer])
// database connection

mongoose.connect(process.env.MONGO).then(console.log('connected to database')).catch(err => console.log(err))

app.use(cors())

app.use(express.json())

app.use(express.static("public"))

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
   
  
  
  
