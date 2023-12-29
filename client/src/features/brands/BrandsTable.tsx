import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useBrands } from './brandservices'
import BrandTableRow from './BrandTableRow'

const BrandsTable = () => {
  const {data} = useBrands()
  console.log(data)
  return (
    
    
    <Table className="border mx-auto max-w-4xl " >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Brand Name</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data?.map(item => <BrandTableRow brand={item} /> )}
  </TableBody>
    </Table>
  )
}

export default BrandsTable