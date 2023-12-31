import ConfirmDelete from "@/components/ConfirmDelete"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"
import { Brand} from "@/utils/types"
import {HiOutlineEllipsisVertical , HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import { useDeleteBrand } from "./brandservices"
import AddEditBrand from "./AddEditBrand"
import { useState } from "react"

const BrandTableRow = ({brand}: {brand:Brand}) => {
  const [editDialog,setEditDialog] = useState(false)
  const [deleteDialog,setDeleteDialog] = useState(false)
  const {mutate,isPending} = useDeleteBrand()
  return (
    <TableRow>
    <TableCell><img src={brand.image} alt="brandlogo" /></TableCell>
    <TableCell>{brand.title}</TableCell>
    <TableCell> 
    <Dialog onOpenChange={()=>setEditDialog(false)} open={editDialog} >
     <Dialog onOpenChange={()=>setDeleteDialog(false)} open={deleteDialog}  >
       <DropdownMenu>
<DropdownMenuTrigger asChild >
<Button variant="ghost" size="icon" className="text-xl" ><HiOutlineEllipsisVertical  /></Button>
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem onClick={()=>setEditDialog(true)} > <HiOutlinePencil/> Edit  </DropdownMenuItem>
<DropdownMenuItem onClick={()=>setDeleteDialog(true)} > <HiOutlineTrash/> Delete  </DropdownMenuItem>
</DropdownMenuContent>
       </DropdownMenu>
      <ConfirmDelete  disabled={isPending} type="delete" action={()=> {
        mutate(brand._id)
        setDeleteDialog(false)
         }}  />

       </Dialog>
       <DialogContent   >
      <AddEditBrand brand={brand}  /> 
      </DialogContent>
      </Dialog>
    </TableCell>
  </TableRow>
  )
}

export default BrandTableRow