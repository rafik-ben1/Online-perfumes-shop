import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { Product } from '@/utils/types'
import { HiOutlineEllipsisVertical, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'

const ProductTableRow = ({product}: {product : Product}) => {
  return (
    <TableRow>
    <TableCell className="font-medium"><img src={product.image} alt="product image" /></TableCell>
    <TableCell>{product.title}</TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell className="text-right">{product.stock}</TableCell>
    <TableCell>
    <DropdownMenu>
<DropdownMenuTrigger asChild >
<Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical /></Button>
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem> <HiOutlinePencil/> Edit  </DropdownMenuItem>
<DropdownMenuItem> <HiOutlineTrash/> Delete  </DropdownMenuItem>
</DropdownMenuContent>
       </DropdownMenu>
    </TableCell>
  </TableRow>
  )
}

export default ProductTableRow