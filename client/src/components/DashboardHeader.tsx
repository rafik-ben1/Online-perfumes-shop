import { UserContext } from "@/context/UserContextProvider"
import { useContext } from "react"
import Avatar from "./Avatar"
import { Button } from "./ui/button"
import { HiOutlineBars2 } from "react-icons/hi2"
import { Side } from "./Side"
import { DashboardNavs } from "@/utils/constants"
import { Link, useLocation } from "react-router-dom"

const DashboardHeader = () => {
  const {user} = useContext(UserContext)
  const path = useLocation().pathname
  return (
    <Side >
    <header className="shadow px-4 py-3 flex justify-between items-center " >
     <span className="flex items-center gap-3" >
      <Side.trigger>
       <Button variant="ghost" className=" md:hidden" size="icon" ><HiOutlineBars2 />
       </Button>
       </Side.trigger>
         <h3 className="  font-medium text-sm sm:text-base text-slate-800 " >Welcome Back {user?.user.name}</h3> </span>
      <div>
        <Avatar />
      </div>
    </header>
    <Side.content>
     <ul className="p-1 pt-3 mt-4" >
       {DashboardNavs.map(nav=> (
        <li key={nav.to} className={` minidashnav mt-3 ${ path === nav.to ? " bg-emerald-400 text-white" : ""}`} > 
        <span className=" text-2xl " >{<nav.icon/>}</span> 
        <Link  to={nav.to} >{nav.label}</Link>
        </li>
       ) )}
     </ul>
    </Side.content>
    </Side >

  )
}

export default DashboardHeader