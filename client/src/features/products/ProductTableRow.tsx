import ConfirmDelete from '@/components/ConfirmDelete'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Product } from '@/utils/types'
import { HiOutlineEllipsisVertical, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { useDeleteProduct } from './productServices'
import AddEditProduct from "./AddEditProduct"

const ProductTableRow = ({product}: {product : Product}) => {
  const {mutate,isPending} = useDeleteProduct()
  return (
    <TableRow>
    <TableCell className="font-medium"><img src={product.image} alt="product image" /></TableCell>
    <TableCell>{product.title}</TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell className="text-right">{product.stock}</TableCell>
    <TableCell>
    <Dialog>
    <DropdownMenu>
<DropdownMenuTrigger asChild >
<Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical /></Button>
</DropdownMenuTrigger>
<DropdownMenuContent  >
  
<DropdownMenuItem  >
<DialogTrigger className='flex items-center gap-2' accessKey='edit' >
   <HiOutlinePencil/> Edit 
</DialogTrigger> </DropdownMenuItem>
<DropdownMenuItem  >
  <DialogTrigger accessKey='delete' className='flex items-center gap-2' >
   <HiOutlineTrash/> Delete 
   </DialogTrigger>
   </DropdownMenuItem>
</DropdownMenuContent>
       </DropdownMenu>
        
<ConfirmDelete accessKey='delete' disabled={isPending} action={()=> mutate(product._id)} type='delete' />
      <DialogContent accessKey='edit'  >
      <AddEditProduct product={product}  /> 
      </DialogContent>
       </Dialog>
    </TableCell>
  </TableRow>
  )
}

export default ProductTableRow