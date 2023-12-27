import React,{useContext} from "react"
import { Link,useLocation} from "react-router-dom"
import {HiOutlineUser} from 'react-icons/hi2'
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

import { DashboardNavs } from "../utils/constants"
import { UserContext } from "../context/UserContextProvider"
export const DashboardSide = () => {
    const path = useLocation().pathname
    const {user} = useContext(UserContext)
  return (

    <aside className=" h-screen pt-2 bg-slate-50 flex flex-col w-[250px] items-start justify-center " >
<ul className=" space-y-2 mt-20 w-full   " >
    <li className="dashnav" > <span className="text-2xl"> <HiOutlineUser /> </span> <Link to="." > {user?.user.name} </Link> </li>
    {DashboardNavs.map(nav=> {
      return (
       <li className={` dashnav ${ path === nav.to ? " bg-emerald-400 text-white" : ""}`} > 
       <span className=" text-2xl " >{<nav.icon/>}</span> 
       <Link  to={nav.to} >{nav.label}</Link>
       </li>

 )
    } )}
<li className="dashnav  hover:bg-red-50 mt-10 ">  <span className="text-2xl text-red-500 " > <HiOutlineArrowLeftOnRectangle /> </span>  <Link to='/home' > Logout</Link>   </li>
</ul>
    </aside>
  )
}
