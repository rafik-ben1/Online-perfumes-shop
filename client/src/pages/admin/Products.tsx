import DashboardPageHeader from "@/components/DashboardPageHeader"
import AddProduct from "@/features/products/AddProduct"
import ProductTable from "@/features/products/ProductTable"


export const Products = () => {
  return (
    <section className="flex flex-col p-4 gap-8 ">
     <DashboardPageHeader page="product" >
        <AddProduct />
     </DashboardPageHeader>
     <ProductTable />
    </section>
  )
}
