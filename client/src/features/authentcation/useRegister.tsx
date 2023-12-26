import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import  { AxiosError } from "axios";
import { userType } from "@/utils/types";
import { useContext } from "react";
import { UserContext } from "@/context/UserContextProvider";
import AXIOS from "@/utils/Axios instance";

export default function useRegister(){
    const {setUser} = useContext(UserContext)
    const mutation = useMutation({
        mutationFn:async function(cred:{name:string,email:string,password:string}){
            const {data} = await AXIOS.post("/auth/register",cred)
            return data as userType
        },
        onSuccess:function(data){
            setUser(data)
            toast.success("successfuly registered")
        },onError:function(error){
            if(error instanceof AxiosError){
                console.log(error)
                toast.error(error.response?.data.message)
                
            }
            
        }
    })
    return mutation
}