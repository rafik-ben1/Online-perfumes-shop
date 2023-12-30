import express from "express"
import { createProduct, deleteProduct, editProduct, getOneProduct, getProducts } from "../Controllers/ProductController.js";
import { authorizeTo, requireAuth } from "../middlewares/requireAuth.js";
import uploadFile from "../utils/uploadFile.js";
const router = express.Router();


const upload = uploadFile("products")
router.post("/",requireAuth,authorizeTo("admin"),upload.single("image"), createProduct )
router.get("/",getProducts)
router.get("/:productId",getOneProduct)
router.delete("/:id",requireAuth,authorizeTo("admin"),deleteProduct)
router.patch("/:id", requireAuth,authorizeTo("admin"),upload.single("image"),editProduct )

export default router;