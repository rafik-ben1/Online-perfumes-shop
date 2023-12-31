import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useBrands } from './brandservices'
import BrandTableRow from './BrandTableRow'
import Spinner from '@/components/Spinner'

const BrandsTable = () => {
  const {data,isLoading} = useBrands()

  
if(isLoading) return <Spinner />
 
  return (
    
    
    <Table className="border max-w-sm md:max-w-3xl mx-auto  " >
    <TableHeader>
      <TableRow>
        <TableHead>Image</TableHead>
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