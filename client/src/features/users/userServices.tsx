import AXIOS from "@/utils/Axios instance"
import { User } from "@/utils/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"

export const useAddUser = function(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : async function (user : User) {
            const {data} = await AXIOS.post("/users/create",user)
            return data.data as User
        },
        onSuccess : function(){
          toast.success("user added successfuly")
          queryClient.invalidateQueries({queryKey:["users"]})
        },
        onError : function(err){
            if(err instanceof AxiosError){
               return toast.error(err.response?.data.message)
            }else{
                return toast.error(err.message)
            }
        }
    })
    return mutation
}

export const useUsers = function(){
    const query = useQuery({
        queryFn : async function(){
            const {data} = await AXIOS.get("/users")
            return data.data as User[]
        },
        queryKey : ["users"]
    })
    return query
}

export const useEditUser = function(){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : async function (user : User) {
            const {data} = await AXIOS.patch(`/users/${user._id}`,user)
            return data.data as User
        },
        onSuccess : function(){
          toast.success("user edited successfuly")
          queryClient.invalidateQueries({queryKey:["users"]})
        },
        onError : function(err){
            if(err instanceof AxiosError){
               return toast.error(err.response?.data.message)
            }else{
                return toast.error(err.message)
            }
        }
    })
    return mutation
}

export const useDeleteUser = function (){
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : async function(id:string | undefined){
           const {data} = await  AXIOS.delete(`/users/${id}`)
            return data.data
        },
        onSuccess:function(){
            queryClient.invalidateQueries({queryKey:["users"]})
            toast.success("user deleted successfuly")
        },
        onError(err){
            console.log(err)
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