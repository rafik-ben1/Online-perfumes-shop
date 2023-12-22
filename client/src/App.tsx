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
function App() {

  return (
    <BrowserRouter>
    <Toaster position="top-center"  />
    <Routes>
     <Route path="/" element={ <AppLayout/> } >
      <Route  path="shop" element={ <Shop/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="about" element={ <About/> } />
      <Route path="/cart" element={ <Cart/> } />
     </Route>
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
  </Routes>
    </BrowserRouter>
  )
}

export default App
