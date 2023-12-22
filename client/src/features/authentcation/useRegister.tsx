import { useMutation } from "@tanstack/react-query";
import {  register } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useRegister(){
    const mutation = useMutation({
        mutationFn:register,
        onSuccess:function(data){
            localStorage.setItem("token",JSON.stringify(data?.token))
            toast.success("successfuly refistered")
        },onError:function(error){
            toast.error(error.message);
            
        }
    })
    return mutation
}