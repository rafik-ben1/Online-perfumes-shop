import React, { ReactNode, createContext, useEffect, useState } from "react";
import { userType } from "../utils/types";


type userCont = {
    user : userType;
    setUser : React.Dispatch<React.SetStateAction<userType  | null >>
}

const storedUser = localStorage.getItem("user");
const userData : userType = storedUser ? JSON.parse(storedUser) : null;

export const UserContext = createContext<userCont >({} as userCont );



const UserContextProvider = ({children} : {children : ReactNode} ) => {
    const [user, setUser] = useState<userType>(userData );

useEffect(()=>{
localStorage.setItem("user",JSON.stringify(user))
},[user])
  return (
 <UserContext.Provider value={{user,setUser}} >
           {children}
 </UserContext.Provider >
  )
}

export default UserContextProvider