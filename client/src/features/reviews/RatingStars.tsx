import { Dispatch } from "react"
import { HiOutlineStar, HiStar } from "react-icons/hi2"

interface RatingStarsProps {
    rating:number
    setRating?: Dispatch<number>
    type? : "small" | "big"
}

const classes = {
    small : "text-sm",
    big : "text-4xl"
}

const RatingStars = ({rating,setRating,type="small"}:RatingStarsProps) => {
    const baseClass = classes[type]
    const stars = Array.from({length:5} ).map((_,i)=>{
        return rating >= i+1 ? <HiStar onClick={()=>setRating && setRating(i+1)} key={i} className={`text-yellow-300  font-semibold ${baseClass} `}  /> :
         <HiOutlineStar onClick={()=> setRating && setRating(i+1)}  key={i} className={`text-yellow-300  font-semibold ${baseClass} `} />
    }  )
  return (
    <>
    <div className='flex gap-1 items-center mr-0 pr-0'>
   {stars }
   </div>
   </>
  )
}

export default RatingStars