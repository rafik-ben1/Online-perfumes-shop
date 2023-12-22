import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useLogin(){
    const mutation = useMutation({
        mutationFn:login,
        onSuccess:function(data){
            localStorage.setItem("token",JSON.stringify(data?.token))
            toast.success("successfuly logged in")
        },onError:function(error){
            toast.error(error.message);
            
        }
    })
    return mutation
}