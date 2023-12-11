import express from "express"
import { authorizeTo, requireAuth } from "../middlewares/requireAuth.js"
import { createOrder, getMyOrders, getOrders, updateOrderStatus } from "../Controllers/ordersController.js"
const router = express.Router()

router.post("/",requireAuth,authorizeTo("user"),createOrder)
router.get("/", requireAuth,authorizeTo("admin"),getOrders )
router.get("/myorders", requireAuth,getMyOrders)
router.patch("/:orderId",requireAuth,updateOrderStatus)
export default router;