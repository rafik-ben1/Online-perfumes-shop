import express from "express"
import { createProduct, getOneProduct, getProducts } from "../Controllers/ProductController.js";
import { authorizeTo, requireAuth } from "../middlewares/requireAuth.js";
import uploadFile from "../utils/uploadFile.js";
const router = express.Router();


const upload = uploadFile("products")
router.post("/",requireAuth,authorizeTo("admin"),upload.single("image"), createProduct )
router.get("/",getProducts)
router.get("/:productId",getOneProduct)

export default router;