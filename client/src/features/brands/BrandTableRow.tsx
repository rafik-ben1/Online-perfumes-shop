import ConfirmDelete from "@/components/ConfirmDelete"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"
import { brand } from "@/utils/types"
import {HiOutlineEllipsisVertical , HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import { useDeleteBrand } from "./brandservices"
import AddBrand from "./AddEditBrand"

const BrandTableRow = ({brand}: {brand:brand}) => {
  const {mutate,isPending} = useDeleteBrand()
  return (
    <TableRow>
    <TableCell>{brand.title}</TableCell>
    <TableCell>{brand.description}</TableCell>
    <TableCell> 
      <Dialog>
       <DropdownMenu>
<DropdownMenuTrigger asChild >
<Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical  /></Button>
</DropdownMenuTrigger>
<DropdownMenuContent>
<DialogTrigger accessKey="edit"  >
<DropdownMenuItem> <HiOutlinePencil/> Edit  </DropdownMenuItem>
</DialogTrigger>
<DialogTrigger accessKey="delete" asChild >
<DropdownMenuItem> <HiOutlineTrash/> Delete  </DropdownMenuItem>
</DialogTrigger>
</DropdownMenuContent>
       </DropdownMenu>
      <ConfirmDelete accessKey="delete" disabled={isPending} type="delete" action={()=> mutate(brand._id) }  />
       <DialogContent accessKey="edit" >
<AddBrand brand={brand} />
       </DialogContent>
       </Dialog>
      
    </TableCell>
  </TableRow>
  )
}

export default BrandTableRow