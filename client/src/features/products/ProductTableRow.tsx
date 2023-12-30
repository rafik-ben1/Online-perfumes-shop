import ConfirmDelete from '@/components/ConfirmDelete'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Product } from '@/utils/types'
import { HiOutlineEllipsisVertical, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { useDeleteProduct } from './productServices'

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
<DropdownMenuItem  > <HiOutlinePencil/> Edit  </DropdownMenuItem>
<DropdownMenuItem  >
  <DialogTrigger className='flex items-center' >
   <HiOutlineTrash/> Delete 
   </DialogTrigger>
   </DropdownMenuItem>
</DropdownMenuContent>
       </DropdownMenu>
        
<ConfirmDelete disabled={isPending} action={()=> mutate(product._id)} type='delete' />
       
       </Dialog>
    </TableCell>
  </TableRow>
  )
}

export default ProductTableRow