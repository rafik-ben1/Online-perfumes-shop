import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useUsers } from "./userServices"
import Spinner from "@/components/Spinner"
import UserTableRow from "./UserTableRow"

const UserTable = () => {
    const {data,isLoading } = useUsers()

    if(isLoading) return <Spinner />
  
  return (
<Table className="border max-w-5xl mx-auto " >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Avatar</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
   {data?.map(user => <UserTableRow key={user._id} user={user} /> )}
  </TableBody>
      </Table>
    )
}

export default UserTable