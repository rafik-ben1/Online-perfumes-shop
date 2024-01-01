import { Link } from "react-router-dom"
import {HiBars3, HiOutlineShoppingCart} from "react-icons/hi2"
import { useContext } from "react"
import { Side } from "./Side"
import { CartContext } from "../context/CartContextProvider"
import Avatar from "./Avatar"
import { MainPageNav as navs } from "@/utils/constants"
import MainPageNav from "./MainPageNav"
import { Button } from "./ui/button"
import MainSideItem from "./MainSideItem"


const Navbar = () => {
    const {state : cart } = useContext(CartContext)

  return (
    <>
    <Side>
  <header className=' w-full  flex items-center justify-between py-2 pr-2 pl-0  md:p-5 bg-inherit text-slate-700 shadow-lg  font-semibold dark:bg-slate-100 ' >
    <div className="flex items-center gap-1 px-0 " >
    <Side.trigger>
       <Button size="icon" variant="ghost" className={` text-lg md:hidden   `} >
        <HiBars3 className=" text-2xl "  />
        </Button>
        </Side.trigger>
        <h3>Orchidia Perfurmes</h3>
  
    </div>
    
    <ul className=' hidden md:flex items-center gap-12   ' >
      {navs.map(nav=> <MainPageNav key={nav.to} to={nav.to} label={nav.label} />) }
    </ul>
  <ul className="flex items-center gap-8 mr-3" >
    <li className="text-2xl relative  " >
        <Link to='/cart' > <HiOutlineShoppingCart className=" relative hover:text-emerald-400 transition-colors duration-200 "  /> 
       {cart.cart.length !==0 &&  <span className="rounded-full text-xs absolute bottom-4 right-6 bg-red-400 text-white h-4 w-4 md:h-5 md:w-5 flex justify-center items-center  " > {cart.cart.reduce((acc,curr)=> curr.quantity + acc , 0 )} </span> }
        
        </Link>
    </li>
   <li>
    <Avatar />
   </li>
    </ul>    
   </header>
   <Side.content>
   <ul className='flex flex-col gap-6 w-full p-2 mt-12 ml-4 '>
     {navs.map(nav => <MainSideItem key={nav.to} to={nav.to} label={nav.label} /> )}
   </ul>
   </Side.content>
    </Side> 
   
        </>
  )
}

export default Navbar