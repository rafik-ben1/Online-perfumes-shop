import {Outlet} from "react-router-dom"
import DashboardHeader from "@/components/DashboardHeader"
import { DashboardSide } from "@/components/DashboardSide"

const DashLayout = () => {
  return (
    <main className="flex w-full h-screen" >
    <DashboardSide/>
    <div className="flex flex-col divide-y-2 divide-stone-100 di w-full " >
<DashboardHeader />
<Outlet/>
    </div>
  </main>
  )
}

export default DashLayout