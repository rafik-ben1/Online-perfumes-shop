import express from "express"
import { getBrands, createBrand} from "../Controllers/brandsController.js"
import { requireAuth, authorizeTo } from "../middlewares/requireAuth.js"
import uploadFile from "../utils/uploadFile.js"
const router = express.Router()

const upload = uploadFile("brands")
router.get("/", getBrands )
router.post("/",requireAuth,authorizeTo("admin"),upload.single("image") ,createBrand )

export default router;