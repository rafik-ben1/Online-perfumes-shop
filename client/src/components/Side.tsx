import {createPortal} from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import {  NavLink } from 'react-router-dom'
import { Dispatch } from 'react'


type props = {
    open : boolean,
    setOpenMenu : Dispatch<boolean>
}

export const Side = ({open, setOpenMenu}:props) => {
   
  return createPortal (
    <div className={`none w-full h-screen backdrop-brightness-75 opacity-0  ${open && "opacity-100 fixed top-0 " } transition-opacity duration-700   `}>
    <aside className={`  absolute  transition-all duration-700 flex flex-col gap-3  h-screen w-[60%] bg-slate-800 `}    >
<button className='absolute top-2 right-2 ' onClick={()=>setOpenMenu(false)} > <HiXMark/> </button>
<ul className='flex flex-col gap-6 w-full p-2 mt-12 ml-4 '>
    <li className='p-3' >
        <NavLink className={({isActive}) => `  text-base font-semibold p-1 text-slate-100 ${isActive && " text-teal-400" } ` }  to='/' > Home </NavLink>
    </li>
    <li className='p-3' >
        <NavLink className={({isActive}) => ` text-base font-semibold p-1 text-slate-100 ${isActive && " text-teal-400" } ` }  to='shop' > Shop </NavLink>
    </li>
    <li className='p-3' >
        <NavLink className={({isActive}) => ` text-base font-semibold p-1 text-slate-100 ${isActive && " text-teal-400" } ` }  to='contact' > Contact </NavLink>
    </li>
    <li className='p-3' >
        <NavLink className={({isActive}) => ` text-base font-semibold p-1 text-slate-100 ${isActive && " text-teal-400" } ` }  to='about' > About </NavLink>
    </li>
</ul>
    </aside>
    </div>
 , document.body )
}