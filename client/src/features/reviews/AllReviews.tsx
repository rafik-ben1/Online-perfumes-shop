import { review } from "@/utils/types"
import SingleReview from "./SingleReview"

const AllReviews = ({reviews}:{reviews : review[]}) => {
  return (
    <div className="border divide-y-2 space-y-8 flex flex-col" >
    {reviews?.map(review => <SingleReview review={review} /> )}
    </div>
  )
}

export default AllReviews