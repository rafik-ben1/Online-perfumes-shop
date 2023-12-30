import DashboardPageHeader from "@/components/DashboardPageHeader"
import AddBrand from "@/features/brands/AddEditBrand"
import BrandsTable from "@/features/brands/BrandsTable"

const Brands = () => {
  return (
    <section className="flex flex-col p-4 gap-8  ">
    <DashboardPageHeader page="brand" >
<AddBrand />
    </DashboardPageHeader>
    <BrandsTable/>
    </section>
  )
}

export default Brands