import AXIOS, {AxiosForm} from "@/utils/Axios instance"
import { ApiResponse, Brand, BrandForm} from "@/utils/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"

export function useAddBrand( ){
    const queryClient = useQueryClient()

   const mutaion = useMutation({
    mutationFn : async function(cred :BrandForm){
        console.log(cred)
        const {data} = await AxiosForm.post("/brands",cred)
        console.log(data)
        return data
    }, onSuccess : function(){
        queryClient.invalidateQueries({queryKey:["brands"]})
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
            const data : ApiResponse<Brand[]>  =  (await AXIOS.get("/brands")).data
            console.log(data)
            return  data.data
        },queryKey :["brands"]
    })
    return query
}

export function useDeleteBrand(){
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async function(id : string | undefined){
            const data = await AXIOS.delete(`/brands/${id}`)
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
    const queryClient = useQueryClient()
    const mutaion = useMutation({
     mutationFn : async function({cred,id}:{cred:BrandForm,id:string}){
         console.log(cred)
         const {data} = await AxiosForm.patch(`/brands/${id}`,cred)
         console.log(data)
         return data
     }, onSuccess : function(){
         toast.success("brand edited successfuly")
         queryClient.invalidateQueries({queryKey:["brands"]})
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