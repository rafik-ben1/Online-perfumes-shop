import { review } from "@/utils/types"
import RatingStars from "./RatingStars"

const SingleReview = ({review}:{review:review}) => {
  return (
<div className="flex items-center gap-1 w-full p-1  " >
    
        <img className=" rounded-full" width={60} src={review.author.avatar} alt="avatar" />
  <div className="flex items-center justify-between " >
      <div className="ml-2 flex flex-col p-1" >
       <p className=" font-semibold text-xl text-slate-900" >{"@"+ review.author.name}</p> 
         <p className=" text-stone-500 text-lg text-start " >{review.review}</p>
   
  </div>  
       
      </div>
</div>
  )
}

export default SingleReview