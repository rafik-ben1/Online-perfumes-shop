import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import AddBrand from "@/features/brands/AddBrand"
import { HiOutlinePlus } from "react-icons/hi2"

const Brands = () => {
  return (
    <section className="flex flex-col p-4 gap-8 ">
    <div className="flex justify-between items-center ">
    <h2 className="text-xl font-semibold text-emerald-700" > Brands page </h2>
    <Dialog>
      <DialogTrigger asChild >
    <Button variant="secondary" size="lg"  > <HiOutlinePlus /> add a brand </Button>
    </DialogTrigger>
    <DialogContent>
      <AddBrand />
    </DialogContent>
    </Dialog>
    </div>
    <div className="flex flex-col gap-4" >
      <h3 className=" text-lg text-slate-700 " > All the Brands </h3>

    </div>
    </section>
  )
}

export default Brands