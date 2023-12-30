import AXIOS, {AxiosForm} from "@/utils/Axios instance"
import { ApiResponse, brand } from "@/utils/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"

export function useAddBrand( ){
   const mutaion = useMutation({
    mutationFn : async function(cred : brand){
        console.log(cred)
        const {data} = await AxiosForm.post("/brands",cred)
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
export function useBrands(){
    const query = useQuery({
        queryFn: async function(){
            const data : ApiResponse<brand[]>  =  (await AXIOS.get("/brands")).data
            return  data.data
        },queryKey :["brands"]
    })
    return query
}

export function useDeleteBrand(){
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async function(id : string | undefined){
            const data = await AXIOS.delete(`/brand/${id}`)
            return data
        },
        onSuccess:function(){
            queryClient.invalidateQueries({queryKey:["brands"]})
            toast.success("brand deleted successfuly")
        },
        onError(err){
            if(err instanceof AxiosError){
               return toast.error(err.response?.data.message)
            }
            else{
                return toast.error(err.message)
            }
        }
    })
    return mutation
}
export function useEditBrand(){
    const mutaion = useMutation({
     mutationFn : async function({cred,id}:{cred:brand,id:string}){
         console.log(cred)
         const {data} = await AxiosForm.patch(`/brand/${id}`,cred)
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