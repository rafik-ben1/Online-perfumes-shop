import AXIOS from "@/utils/Axios instance"
import { ReviewForm, review } from "@/utils/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"

export const useAddReview = function(){
    const productId = useParams().productId
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : async function(review : ReviewForm){
            const {data} = await AXIOS.post(`/products/${productId}/reviews`,review)
            return data.data as review
        },
        onSuccess: function(){
            toast.success("your review has been sent")
            queryClient.invalidateQueries({queryKey:["reviews"]})
        }, onError(err){
            if(err instanceof AxiosError){
               return toast.error(err.response?.data.message)
            }
            toast.error(err.message)
        }
    })
    return mutation
}
/*export function useReviews(){
    const productId = useParams().productId
    const query = useQuery({
        queryKey:["reviews"],
        queryFn: async function(){
            const {data} = await AXIOS.get(`/products/${productId}/reviews`)
            console.log(data)
            return data.data as review[]
        }
    })
    return query
}*/