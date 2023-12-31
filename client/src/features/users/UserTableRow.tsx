import { useState } from "react"
import { useDeleteUser } from "./userServices"
import { TableCell, TableRow } from "@/components/ui/table"
import { User } from "@/utils/types"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { HiOutlineEllipsisVertical, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2"
import ConfirmDelete from "@/components/ConfirmDelete"
import AddEditUser from "./AddEditUser"

const UserTableRow = ({user}: {user:User}) => {
    const [editDialog,setEditDialog] = useState(false)
    const [deleteDialog,setDeleteDialog] = useState(false)
  
    const {mutate,isPending} = useDeleteUser()
    return (
      <TableRow >
      <TableCell ><img width={40} className=" rounded-full" src={user.avatar} alt="user avatar"/></TableCell>
      <TableCell className=' font-medium' >{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className=' font-semibold text-base  ' >{user.role}</TableCell>
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
          
          <ConfirmDelete  disabled={isPending} action={()=> mutate(user._id)} type='delete' />
  </Dialog>
        <DialogContent   >
        <AddEditUser user={user} /> 
        </DialogContent>
         </Dialog>
      </TableCell>
    </TableRow>
)}

export default UserTableRow