import { UserContext } from "@/context/UserContextProvider"
import { useContext } from "react"
import { HiOutlineUser } from "react-icons/hi2"
import { Link } from "react-router-dom"

const Avatar = () => {
    const {user} = useContext(UserContext)
  return (
     user !== null ? <Link to="/login" > <span className=" cursor-pointer flex items-center">
         <img className="rounded-full" width={35} src={user.user.avatar} alt="avatar" />
          </span>
          </Link >
: <Link to="/login" className="text-2xl" > <HiOutlineUser className=" hover:text-emerald-400 transition-colors duration-200 "  /> </Link>
   )
}

export default Avatar