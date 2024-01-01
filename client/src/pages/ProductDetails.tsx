import Spinner from "@/components/Spinner"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectValue,SelectTrigger } from "@/components/ui/select"
import { CartContext } from "@/context/CartContextProvider"
import { useSingleProduct } from "@/features/products/productServices"
import { ACTIONS } from "@/utils/constants"
import { formatCurrency } from "@/utils/helpers"
import { useContext, useState } from "react"
import { HiOutlineArrowLeft, HiOutlineShoppingCart } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { Product } from "@/utils/types"

const ProductDetails = () => {
    const {data,isLoading} = useSingleProduct()
    const [quantity,setQuantity] = useState(1)
    const navigate = useNavigate()
    const {dispatch} = useContext(CartContext)
    if(isLoading) return <Spinner />
  return (
<section className="p-1 flex flex-col px-1 sm:px-3 md:px-6 py-11 relative  " >
<Button className="absolute top-[2px] left-1" onClick={()=>navigate(-1)} variant="ghost" size="icon" > <HiOutlineArrowLeft /> </Button>
<div className=" flex flex-col justify-center gap-10 md:flex-row  " >    
 <img className=" h-[400px] w-[400px] inline lg:h-full  " src={data?.image} alt="product image" />
 <div className="flex flex-col gap-5 md:mt-3" >
   <h2 className=" text-2xl mb-2 text-start font-bold text-slate-700" > {data?.title} </h2>
   <h3 className="text-xl mb-1 font-semibold text-stone-700 " > Overview </h3>
   <p className=" text-stone-400 text-sm sm:text-base" > {data?.description}</p>
   <span className="flex items-center gap-2 font-semibold text-xl mb-1 " > <h3  >Gender :</h3> <p > {data?.gender} </p>  </span>
   <span className="flex items-center gap-2 font-semibold text-xl mb-1 " > <h3  >Price :</h3> <p className="text-green-600" >  {data?.price && formatCurrency(+data.price) } </p>  </span>
    <span className="flex items-center gap-2 font-semibold text-xl mb-1" ><h3>Rating :</h3> <p className=" text-stone-600" >{data?.rating ?? "0" + ` rated by (${data?.totalRatings})` }  </p> </span>
    <div className="flex items-center gap-4 w-[150px] " > 
      <Select  onValueChange={(value)=> setQuantity(+value)} value={String(quantity)} >
             <SelectTrigger  >
                  <SelectValue placeholder={quantity} />
             </SelectTrigger>
             <SelectContent>
              <SelectGroup>              
               <SelectItem value="1"> 1 </SelectItem>
               <SelectItem value="2"> 2 </SelectItem>
               <SelectItem value="3"> 3 </SelectItem>
               <SelectItem value="4"> 4 </SelectItem>
               <SelectItem value="5"> 5 </SelectItem>
               </SelectGroup> 
               </SelectContent>
      </Select>
           <Button onClick={()=>dispatch({type:ACTIONS.addItem,payload:{item:{...data as Product ,quantity}}})} > <span className="flex items-center text-lg gap-2 "> <HiOutlineShoppingCart />Add to cart </span> </Button>
    </div>
 </div>
</div>
</section>
    )
}

export default ProductDetails