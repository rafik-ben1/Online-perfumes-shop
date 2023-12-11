import express from "express"
import { createReview, getReviews, updateReview, deleteReview } from "../Controllers/reviewsController.js"
import { requireAuth, authorizeTo } from "../middlewares/requireAuth.js"
const router = express.Router({mergeParams: true})



router.post("/",requireAuth,authorizeTo("user"),createReview )
router.get("/",getReviews)
router.patch("/:reviewId",requireAuth,updateReview)
router.delete("/:reviewId", deleteReview )

export default router;