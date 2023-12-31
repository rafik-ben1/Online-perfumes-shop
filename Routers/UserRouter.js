import express from "express"
import { authorizeTo, requireAuth } from "../middlewares/requireAuth.js"
import uploadFile from "../utils/uploadFile.js"
import { createUser, deleteUser, getUsers, updateProfile } from "../Controllers/userController.js"
const router = express.Router()
const upload = uploadFile("users")

router.post("/",requireAuth,authorizeTo("admin"),createUser)
router.patch("/update",requireAuth,upload.single("avatar"), updateProfile )
router.delete("/:userId",requireAuth,authorizeTo("admin"),deleteUser)
router.get("/",requireAuth,authorizeTo("admin"),getUsers)

export default router