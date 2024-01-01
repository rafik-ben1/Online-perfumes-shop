import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CartContext } from "@/context/CartContextProvider"
import { useContext } from "react"
import CartTableRow from "./CartTableRow"

const CartTable = () => {
  const {state} = useContext(CartContext)
  return (
    <Table className="border max-w-sm md:max-w-4xl  bg-slate-50   " >
    <TableHeader>
      <TableRow>
        <TableHead >Image</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Cost</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
       {state.cart.map(item => <CartTableRow key={item._id} product={item} /> ) }
      </TableBody>
      </Table>
    )
}

export default CartTable