import { UserContext } from "@/context/UserContextProvider"
import { useContext } from "react"
import Avatar from "./Avatar"

const DashboardHeader = () => {
  const {user} = useContext(UserContext)
  return (
    <header className="shadow px-4 py-3 flex justify-between items-center " >
      <h3 className=" font-medium text-slate-800 " >Welcome Back {user?.user.name}</h3>
      <div>
        <Avatar />
      </div>
    </header>
  )
}

export default DashboardHeader