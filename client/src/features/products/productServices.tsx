import AXIOS, { AxiosForm } from "@/utils/Axios instance"
import { Product, ProductForm, SingleProduct} from "@/utils/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"

export function useAddProduct( ){
    const queryClient = useQueryClient()
    const mutaion = useMutation({
     mutationFn : async function(cred : ProductForm){
         const {data} = await AxiosForm.post("/products",cred)
         return data
     }, onSuccess : function(){
         toast.success("product created successfuly")
        queryClient.invalidateQueries({queryKey:["products"]})
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
            return data.data as Product[]
        },
        queryKey:["products"]
    })
    return query
 }

 export const useDeleteProduct = function (){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : async function(id:string | undefined){
           const {data} = await  AXIOS.delete(`/products/${id}`)
            return data.data
        },
        onSuccess:function(){
            queryClient.invalidateQueries({queryKey:["products"]})
            toast.success("product deleted successfuly")
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
 export function useEditProduct(){
    const queryClient = useQueryClient()
    const mutaion = useMutation({
     mutationFn : async function({cred ,id}:{cred : ProductForm,id:string | undefined}){
         const {data} = await AxiosForm.patch(`/products/${id}`,cred)
         return data
     }, onSuccess : function(){
         toast.success("Product edited successfuly")
         queryClient.invalidateQueries({queryKey:["products"]})

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
 
 export function useSingleProduct(){
    const id = useParams().productId
    const query = useQuery({
        queryFn :async function(){
            const data = await AXIOS.get(`/products/${id}`)
            return data.data.product as SingleProduct
        },
        queryKey:["product"]
    })
    return query
 }