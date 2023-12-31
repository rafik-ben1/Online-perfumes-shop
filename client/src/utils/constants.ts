import {HiOutlineHome , HiOutlineUserGroup  } from "react-icons/hi2"
import { TbPerfume } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia"
import { BiCategory } from "react-icons/bi";

export const ACTIONS = {
    addItem : "addItem",
    removeItem : "removeItem",
    clearCart : "ClearCart",
    updateQuantity : "updateQuantity",
  
  }
  export const DashboardNavs = [
    {to:"/dashboard", label : "Home", icon : HiOutlineHome },
    {to:"/dashboard/products", label : "Products", icon : TbPerfume },
    {to:"/dashboard/brands", label : "Brands", icon : BiCategory },
    {to:"/dashboard/orders", label : "Orders", icon : LiaShippingFastSolid
   },
    {to:"/dashboard/users", label : "Users", icon : HiOutlineUserGroup }
  ]

  export const MainPageNav = [
    {to:"/",label:"Home"},
    {to:"/shop",label:"Shop"},
    {to:"/contact",label:"Contact"},
    {to:"/about",label:"About"}
  ]