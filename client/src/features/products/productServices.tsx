import AXIOS, { AxiosForm } from "@/utils/Axios instance"
import { Product, ProductForm} from "@/utils/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"

export function useAddProduct( ){
    const mutaion = useMutation({
     mutationFn : async function(cred : ProductForm){
         console.log(cred)
         const {data} = await AxiosForm.post("/products",cred)
         console.log(data)
         return data
     }, onSuccess : function(data  ){
         console.log(data)
         toast.success("brand created successfuly")
     }, onError: function(err){
         console.log(err)
         if(err instanceof AxiosError ){
             return toast.error(err.response?.data?.message)
         }else{
             toast.error(err.message)
         }
     }
    })
    return mutaion
 }

export const useProducts = function (){
    const query = useQuery({
        queryFn : async function (){
            const {data} = await AXIOS.get("/products")
            console.log("data" , data)
            return data.data as Product[]
        },
        queryKey:["products"]
    })
    return query
 }