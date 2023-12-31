import DashboardPageHeader from "@/components/DashboardPageHeader"
import AddEditUser from "@/features/users/AddEditUser"
import UserTable from "@/features/users/UserTable"

const Users = () => {
  return (
<section className="flex flex-col p-4 gap-8" >
  <DashboardPageHeader page="user" >
    <AddEditUser />
  </DashboardPageHeader>
  <UserTable/>
</section>
    )
}

export default Users