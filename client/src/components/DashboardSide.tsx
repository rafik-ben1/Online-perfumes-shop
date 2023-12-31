import { Link,useLocation} from "react-router-dom"
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

import { DashboardNavs } from "../utils/constants"
export const DashboardSide = () => {
    const path = useLocation().pathname
  return (
    <aside className="hidden  h-screen pt-2 bg-slate-50 md:flex flex-col w-[250px] items-start justify-center " >

<ul className=" space-y-2 mt-20 w-full   " >
    {DashboardNavs.map(nav=> {
      return (
       <li key={nav.to} className={` dashnav ${ path === nav.to ? " bg-emerald-400 text-white" : ""}`} > 
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
