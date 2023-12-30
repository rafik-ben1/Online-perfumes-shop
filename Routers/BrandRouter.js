import express from "express"
import { getBrands, createBrand, editBrand} from "../Controllers/brandsController.js"
import { requireAuth, authorizeTo } from "../middlewares/requireAuth.js"
import uploadFile from "../utils/uploadFile.js"
const router = express.Router()

const upload = uploadFile("brands")
router.get("/", getBrands )
router.post("/",requireAuth,authorizeTo("admin"),upload.single("image") ,createBrand )
router.patch("/:id",requireAuth,authorizeTo("admin"),upload.single("image") ,editBrand)

export default router;