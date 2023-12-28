import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const BrandsTable = () => {
  return (
    <Table className="border" >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Brand Name</TableHead>
        <TableHead>Operations</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
    </TableRow>
  </TableBody>
    </Table>
  )
}

export default BrandsTable