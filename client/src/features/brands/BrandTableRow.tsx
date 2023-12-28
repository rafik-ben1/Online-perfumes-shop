import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"
import { brand } from "@/utils/types"
import {HiOutlineEllipsisVertical , HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"

const BrandTableRow = ({brand}: {brand:brand}) => {
  return (
    <TableRow key={brand._id} >
    <TableCell>{brand.title}</TableCell>
    <TableCell>{brand.description}</TableCell>
    <TableCell> 
       <DropdownMenu>
<DropdownMenuTrigger asChild >
<Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical  /></Button>
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

export default BrandTableRow