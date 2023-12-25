import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

export default function useRegister(){
    const mutation = useMutation({
        mutationFn:async function(cred:{name:string,email:string,password:string}){
            const {data} = await axios.post("https://orchidia-store.onrender.com",cred)
            return data
        },
        onSuccess:function(data){
            localStorage.setItem("token",JSON.stringify(data?.token))
            toast.success("successfuly refistered")
        },onError:function(error){
            toast.error(error.message);
            
        }
    })
    return mutation
}