import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TableCell, TableRow } from "@/components/ui/table"
import { CartContext } from "@/context/CartContextProvider"
import { ACTIONS } from "@/utils/constants"
import { formatCurrency } from "@/utils/helpers"
import { cartItem } from "@/utils/types"
import { useContext } from "react"
import {HiOutlineXMark} from "react-icons/hi2" 

const CartTableRow = ({product}:{product:cartItem}) => {
    const {dispatch} = useContext(CartContext)
  return (
   <TableRow className='' >
     <TableCell ><img width={60} src={product.image} alt="product image" /></TableCell>
     <TableCell className="md:font-medium text-sm sm:text-base" >{product.title}</TableCell>
     <TableCell>
            <Select onValueChange={(value)=>dispatch({type:ACTIONS.updateQuantity,payload:{item:{...product,quantity:Number(value)}}})}   value={String(product.quantity)} >
             <SelectTrigger >
                  <SelectValue placeholder={product.quantity} />
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
        </TableCell>
     <TableCell className=' font-medium text-sm sm:text-base  text-green-500 ' >{formatCurrency(+product.price*product.quantity) }</TableCell>
     <TableCell> <Button onClick={()=> dispatch({type:ACTIONS.removeItem ,payload:{item:product} }) } size="icon" variant="ghost" className="text-xl" ><HiOutlineXMark /> </Button> </TableCell>
   </TableRow>
  )
}

export default CartTableRow