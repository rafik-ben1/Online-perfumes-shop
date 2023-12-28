import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ProductTable = () => {
  return (
    <Table className="border" >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-right">Discount</TableHead>
        <TableHead >Operations</TableHead>

      </TableRow>
    </TableHeader>
    <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
    </Table>
    )
}

export default ProductTable