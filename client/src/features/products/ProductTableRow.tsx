import ConfirmDelete from '@/components/ConfirmDelete'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Product } from '@/utils/types'
import { HiOutlineEllipsisVertical, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { useDeleteProduct } from './productServices'
import AddEditProduct from "./AddEditProduct"
import { useState } from 'react'
import { formatCurrency } from '@/utils/helpers'

const ProductTableRow = ({product}: {product : Product}) => {
  const [editDialog,setEditDialog] = useState(false)
  const [deleteDialog,setDeleteDialog] = useState(false)

  const {mutate,isPending} = useDeleteProduct()
  return (
    <TableRow className='' >
    <TableCell ><img width={60} src={product.image} alt="product image" /></TableCell>
    <TableCell className="md:font-medium text-sm sm:text-base" >{product.title}</TableCell>
    <TableCell>{product.gender}</TableCell>
    <TableCell className=' font-semibold text-base  text-green-500 ' >{formatCurrency(+product.price)}</TableCell>
    <TableCell className="text-right">{product.stock}</TableCell>
    <TableCell>
 <Dialog onOpenChange={()=>setEditDialog(false)} open={editDialog} >
  <Dialog onOpenChange={()=>setDeleteDialog(false)} open={deleteDialog}  >
    <DropdownMenu>
     <DropdownMenuTrigger asChild >
       <Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical /></Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent  >
  
       <DropdownMenuItem onClick={()=>setEditDialog(true)}  >
          <HiOutlinePencil/> Edit 
       </DropdownMenuItem>
       <DropdownMenuItem onClick={()=>setDeleteDialog(true)}  >
          <HiOutlineTrash/> Delete 
       </DropdownMenuItem>
       </DropdownMenuContent>
       </DropdownMenu>
        
        <ConfirmDelete  disabled={isPending} action={()=> mutate(product._id)} type='delete' />
</Dialog>
      <DialogContent   >
      <AddEditProduct product={product}  /> 
      </DialogContent>
       </Dialog>
    </TableCell>
  </TableRow>
  )
}

export default ProductTableRow