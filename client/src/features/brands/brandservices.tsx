import AXIOS, {AxiosForm} from "@/utils/Axios instance"
import { ApiResponse, brand } from "@/utils/types"
import { useMutation, useQuery } from "@tanstack/react-query"
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