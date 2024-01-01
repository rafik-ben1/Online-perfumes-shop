import { Button } from "@/components/ui/button"
import { CartContext } from "@/context/CartContextProvider"
import { formatCurrency } from "@/utils/helpers"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartSummary = () => {
    const {state} = useContext(CartContext)

    const total = state.cart.reduce((acc,curr)=> (+curr.price * curr.quantity) + acc ,0 )
    
    if(state.cart.length===0) return; 

    return (
    <div className="flex flex-col border bg-slate-100 p-4 rounded-md gap-3  " >
       <span  className=" md:text-lg font-meduim text-slate-800 flex justify-between items-center" >
        <h2 > Subtotal  </h2>
         <h2 className=" font-semibold" > {formatCurrency(total)} </h2>
        </span> 
        <p className=" text-stone-600" >Shipping and taxes calculated at checkout.</p>
        <Button  >Checkout</Button>
        <span className="text-sm mt-1" > or <Link className=" text-blue-500" to="/shop">Continue Shopping → </Link> </span>
    </div>
  )
}

export default CartSummary