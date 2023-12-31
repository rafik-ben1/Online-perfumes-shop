import { useMutation } from "@tanstack/react-query";
import  { AxiosError } from "axios";
import toast from "react-hot-toast";
import { userType } from "../../utils/types";
import { useContext } from "react";
import {UserContext} from "../../context/UserContextProvider"
import AXIOS from "../../utils/Axios instance";
import { useNavigate } from "react-router-dom";

export  function useLogin(){
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn:async function(cred:{email:string,password:string}){
            const {data}  = await AXIOS.post("/auth/login",cred)
            return data as userType
        },
        onSuccess:function(data){
            setUser(data)
            toast.success("successfuly logged in")
            if(data?.user.role ==="admin")
            navigate("/dashboard")
        else
        navigate("/")
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
export  function useRegister(){
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