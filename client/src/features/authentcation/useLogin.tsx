import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { userType } from "../../utils/types";
import { UserContext } from "../../context/userContextProvider";
import { useContext } from "react";

export default function useLogin(){
    const {setUser} = useContext(UserContext)
    const mutation = useMutation({
        mutationFn:async function(cred:{email:string,password:string}){
            const {data}  = await axios.post("https://orchidia-store.onrender.com/auth/login",cred)
            return data as userType
        },
        onSuccess:function(data){
            setUser(data)
            toast.success("successfuly logged in")
        },
        onError : function(error){
            console.log(error)
            if (error instanceof AxiosError){
toast.error(error.response?.data.message)
            }
            else{
                toast.error(error.message)
            }
        }
    })
    return mutation
}