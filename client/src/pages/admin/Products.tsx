import { Button } from "@/components/ui/button"
import { HiOutlinePlus } from "react-icons/hi2"

export const Products = () => {
  return (
    <section className="flex flex-col p-4 gap-8 ">
      <div className="flex justify-between items-center ">
      <h2 className="text-xl font-semibold text-emerald-700" > Products page </h2>
      <Button variant="secondary" size="lg"  > <HiOutlinePlus /> add a product </Button>
      </div>
      <div className="flex flex-col gap-4" >
        <h3 className=" text-lg text-slate-700 " > All the products </h3>
   
 


      </div>
    </section>
  )
}
