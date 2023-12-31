import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useBrands } from './brandservices'
import BrandTableRow from './BrandTableRow'
import Spinner from '@/components/Spinner'

const BrandsTable = () => {
  const {data,isLoading} = useBrands()

  
if(isLoading) return <Spinner />
 
  return (
    
    
    <Table className="border mx-auto max-w-2xl " >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Brand Name</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
     { data?.map(item => <BrandTableRow key={item._id} brand={item} /> )}
  </TableBody>
    </Table>
  )
}

export default BrandsTable