import {FormEvent, useState } from "react"
import RatingStars from "./RatingStars"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useAddReview } from "./reviewServises"

const AddReview = () => {
    const [rating,setRating] = useState(0)
    const [review,setReview] = useState("")
    const [ratingError,setRatingError] = useState("")
    const [reviewError,setReviewError] = useState("")

    const {mutate,isPending} = useAddReview()

    function handelSubmit(e: FormEvent){
        setRatingError('')
       e.preventDefault()
       if(rating ===0){
        return setRatingError("please provide a rating")
       }
       if(review.length <= 3 ){
       return  setReviewError("review must be at least 3 char long")
       }
       mutate({rating ,review})
    }

  return (
<form onSubmit={handelSubmit} className="flex flex-col justify-center text-start  gap-3 " >
    <p className="text-slate-800 text-lg font-medium md:text-2xl "> Add a new review </p>
 <p className="text-xl font-semibold text-slate-900" >Your Rating</p>   
<RatingStars type="big" setRating={setRating} rating={rating} />
<p className=" text-lg text-destructive" >{ratingError} </p>
<p className="text-xl font-semibold text-slate-900" >Your review</p>
<Textarea disabled={isPending} placeholder="write your review here" value={review}
 onChange={(e)=> {
    setReview(e.target.value)
    setRatingError("")}
    }  />
<p className=" text-sm text-destructive" >{reviewError} </p>
<Button disabled={isPending} > Submit </Button>
</form>
    )
}

export default AddReview