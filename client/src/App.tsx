import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import { Toaster } from "react-hot-toast"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Dashboard from "./pages/admin/Dashboard"
import { Products } from "./pages/admin/Products"
import Brands from "./pages/admin/Brands"
import Orders from "./pages/admin/Orders"
import Users from "./pages/admin/Users"
import DashLayout from "./pages/admin/DashLayout"
import ProductDetails from "./pages/ProductDetails"
function App() {

  return (
    <BrowserRouter>
    <Toaster position="top-center"  />
 <Routes>
  <Route path="/" element={ <AppLayout/> } >
      <Route  path="shop" element={ <Shop/> } />
       <Route path="products/:productId" element={ <ProductDetails/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="about" element={ <About/> } />
      <Route path="cart" element={ <Cart/> } />
  </Route>
 
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
 
  <Route  path="/dashboard" element={<DashLayout/>} >
     <Route index element={ <Dashboard/> } />
     <Route path="products" element={ <Products/> } />
     <Route path="brands" element={ <Brands/> } />
     <Route path="orders" element={ <Orders/> } />
     <Route path="users" element={ <Users/> } />
     <Route path="orders" element={ <Orders/> } />
  </Route>
 <Route path="*"  element={ <h2>Page not found</h2>  } />
  </Routes>
    </BrowserRouter>
   
  )
}

export default App
