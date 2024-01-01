
import  { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react'
import {  cartItem, cartReducerAction } from '../utils/types'
import { ACTIONS } from '../utils/constants'
import toast from 'react-hot-toast'

type state = {
   cart : cartItem[]
  error? : string
  success? : string
  
}
type cartContext = {
  state : state ,
  dispatch : Dispatch<cartReducerAction>
}

const initialCart: cartItem[] = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
 
function reducer (state : state  , action:cartReducerAction  ) : state {
switch (action.type) {
  case ACTIONS.addItem:
    if(state.cart.find(product => product._id === action.payload.item._id )){
      return {...state,success:'', error : "item already in cart" }
    }
   
    return {error:"",success:"item added to cart", cart :[...state.cart , {...action.payload.item , quantity:1} ]}
case ACTIONS.removeItem:
 
  return {...state , cart:state.cart.filter(item=> item._id !== action.payload.item._id  )}
 case ACTIONS.clearCart:
  return {...state , cart : []}
  case ACTIONS.updateQuantity:
return {...state , cart:state.cart.map(item => item._id === action.payload.item._id ? action.payload.item as cartItem   : item )}
     case "reset" :
      return {...state,error:"",success:""}  
default:
    return state
}
} 
export const CartContext = createContext({} as cartContext )

const CartContextProvider = ({children  } : {children : ReactNode}) => {
const [state, dispatch ] = useReducer(reducer , {success:"",error: "",cart:initialCart} )
useEffect(()=>{
localStorage.setItem("cartItems", JSON.stringify(state.cart) )
},[state.cart])

useEffect(()=>{
if(state.success){
toast.success(state.success) }
if(state.error){
  toast.error(state.error)
}
dispatch({type:"reset",payload:{item:{} as cartItem }})

},[state.success,state.error])
return (
   
    <CartContext.Provider value={{state,dispatch}} >
        {children}
    </CartContext.Provider>

  )
}


export default CartContextProvider