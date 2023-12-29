import DashboardPageHeader from "@/components/DashboardPageHeader"
import AddProduct from "@/features/products/AddProduct"


export const Products = () => {
  return (
    <section className="flex flex-col p-4 gap-8 ">
     <DashboardPageHeader page="product" >
        <AddProduct />
     </DashboardPageHeader>
    </section>
  )
}
