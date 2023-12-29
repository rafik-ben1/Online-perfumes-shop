import { ReactNode } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { HiOutlinePlus } from "react-icons/hi2"

interface Props {
    children : ReactNode
    page : "brand" | "product" | "user" | "order"
}

const DashboardPageHeader = ({children,page}: Props) => {
  return (
    <>
    <h2 className="text-xl font-semibold text-emerald-700" > {page[0].toUpperCase()+page.substring(1,page.length)} page </h2>
    <div className="flex flex-col gap-4" >
        <div className="flex justify-between items-center ">
             <h3 className=" text-lg text-slate-700 " > All the {page+"s"} </h3>
             <Dialog>
      <DialogTrigger asChild >
    <Button > <HiOutlinePlus /> add a {page}  </Button>
    </DialogTrigger>
    <DialogContent>
      {children}
    </DialogContent>
    </Dialog>
    </div>
    </div>
    </>
  )
}

export default DashboardPageHeader