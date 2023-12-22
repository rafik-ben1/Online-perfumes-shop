import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <main className=' bg-stone-50 min-h-screen     '   >
   
    <Outlet />
    </main>
   
    </>
  )
}

export default AppLayout