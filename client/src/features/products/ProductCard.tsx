import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/CartContextProvider'
import { ACTIONS } from '@/utils/constants'
import { Product } from '@/utils/types'
import { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi2'

interface ProductCart{
    product : Product
}

const ProductCard = ({product}:ProductCart) => {
    const {dispatch} = useContext(CartContext)

    function addToCart(){
      
         dispatch({type:ACTIONS.addItem,payload:{item:product}}) 
        
    }
  return (
    <div className='relative group bg-white border hover:translate-y-1 transition-transform duration-300   border-stone-100 w-[250px]  flex flex-col shadow-lg rounded-xl p-2  mb-3 mx-auto  ' >
    <img className='w-full rounded-sm m-1 h-44  object-contain ' src={product?.image} alt="product" />
    <h5 className=' text-base  font-sm font-medium ' >{product?.title}</h5>
   <div className='flex items-center justify-between  ' >
   <span className=' ml-1 flex items-center ' > Price :  <p className=' ml-1 font-semibold  text-green-500' >   {' ' + product?.price }$ </p> </span>
   
   </div>
   <Button onClick={addToCart} variant="ghost" size="icon" className=' rounded-full text-lg absolute top-1 right-1 group-hover:bg-emerald-400 group-hover:text-emerald-50 ' > <HiOutlineShoppingCart/> </Button>
    </div>
  )
}

export default ProductCard