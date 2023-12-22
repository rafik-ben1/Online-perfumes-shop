import { Link, NavLink, useLocation } from "react-router-dom"
import {HiBars3, HiOutlineShoppingCart, HiOutlineUser} from "react-icons/hi2"
import { useContext, useEffect, useState } from "react"
import { Side } from "./Side"
import { CartContext } from "../context/CartContext"


const Navbar = () => {
    const {state : cart } = useContext(CartContext)
    const [openMenu, setOpenMenu] = useState(false)
const path = useLocation().pathname
    
useEffect(()=>{
        close()
    },[path])
    function close() {
setOpenMenu(false)
    }
  return (
    <>
  <header className=' w-full  flex items-center justify-between py-2 pr-2 pl-0  md:p-5 bg-inherit text-slate-700 shadow-lg  font-semibold dark:bg-slate-100 ' >
    <div className="flex items-center gap-1 px-0 " >
    <button onClick={()=>setOpenMenu(true)}  className={` transition-transform duration-300 text-lg p-3 border-none bg-inherit md:hidden   `} >
        <HiBars3 className=" text-2xl "  />
        </button>
        <h3>Orchidia Perfurmes</h3>
  
    </div>
    
    <ul className=' hidden md:flex items-center gap-12   ' >
        <li className=" " >
            <NavLink   className={({isActive})=> `   ${isActive ? 'text-emerald-400 border-b-2 border-solid border-emerald-500 ' : ' text-neutral-700' } hover:text-emerald-400 transition-all duration-300 p-2` }  to="/">Home</NavLink>
        </li>
        <li className=" " >
            <NavLink  className={({isActive})=> `  ${isActive ? 'text-emerald-400 border-b-2 border-solid border-emerald-500' : ' text-neutral-700' } hover:text-emerald-400 transition-all duration-300 p-2` }  to="shop">Shop</NavLink>
        </li>
        <li className=" " >
            <NavLink  className={({isActive})=> `  ${isActive ? 'text-emerald-400 border-b-2 border-solid border-emerald-500' : ' text-neutral-700' } hover:text-emerald-400 transition-all duration-300 p-2`}  to="contact">Contact</NavLink>
        </li>
        <li className=" " >
            <NavLink  className={({isActive})=> `  ${isActive ? 'text-emerald-400 border-b-2 border-solid border-emerald-500' : ' text-neutral-700' } hover:text-emerald-400 transition-all duration-300 p-2` }  to="about">About</NavLink>
        </li>
    </ul>
  <ul className="flex items-center gap-8 mr-3" >
    <li className="text-2xl relative  " >
        <Link to='/cart' > <HiOutlineShoppingCart className=" relative hover:text-emerald-400 transition-colors duration-200 "  /> 
       {cart.length !==0 &&  <span className="rounded-full text-xs absolute bottom-4 right-6 bg-red-400 text-white h-4 w-4 md:h-5 md:w-5 flex justify-center items-center  " > {cart.reduce((acc,curr)=> curr.quantity + acc , 0 )} </span> }
        
        </Link>
    </li>
   <li>
    <Link to="/login" className="text-2xl" > <HiOutlineUser className=" hover:text-emerald-400 transition-colors duration-200 "  /> </Link>
   </li>
    </ul> 
      
   </header>
   
    <Side open ={openMenu} setOpenMenu={setOpenMenu} /> 
   

   
   
        </>
  )
}

export default Navbar