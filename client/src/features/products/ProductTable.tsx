import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useProducts } from "./productServices"
import Spinner from "@/components/Spinner"
import ProductTableRow from "./ProductTableRow"

const ProductTable = () => {
  const {data, isLoading} = useProducts()

if(isLoading) return <Spinner />

  return (
    <Table className="border max-w-md md:max-w-5xl mx-auto  " >
    <TableHeader>
      <TableRow>
        <TableHead >Image</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Gender</TableHead>
        <TableHead>Price</TableHead>
        <TableHead >Stock</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
   {data?.map(product => <ProductTableRow key={product._id} product={product} /> )}
  </TableBody>
    </Table>
    )
}

export default ProductTable