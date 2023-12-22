
import  { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react'
import {  cartItem, cartReducerAction } from '../utils/types'
import { ACTIONS } from '../utils/constants'

const initialCart: cartItem[] = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
 
type cartContext = {
    state : cartItem[],
    dispatch : Dispatch<cartReducerAction>
}

function reducer (state : cartItem[] , action:cartReducerAction  ) : cartItem[] {
switch (action.type) {
  case ACTIONS.addItem:
    
    return [...state , action.payload.item]
case ACTIONS.removeItem:
  return state.filter(item=> item.id !== action.payload.item.id  )
 case ACTIONS.clearCart:
  return []
  case ACTIONS.updateQuantity:
return state.map(item => item.id === action.payload.item.id ? {...item, quantity : action.payload.quantity ?? item.quantity} : item )
  default:
    return state
}
} 
export const CartContext = createContext({} as cartContext )

const CartContextProvider = ({children  } : {children : ReactNode}) => {
const [state, dispatch ] = useReducer(reducer , initialCart )
useEffect(()=>{
localStorage.setItem("cartItems", JSON.stringify(state) )
},[state])
return (
   
    <CartContext.Provider value={{state,dispatch}} >
        {children}
    </CartContext.Provider>

  )
}


export default CartContextProvider