import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useAddBrand } from "./brandservices"
import { useState } from "react"
import { Label } from "@/components/ui/label"

const brandSchema = z.object({
    title: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    description : z.string().min(30,{
      message: "description must be at least 30 character long!",
    })
})

const AddBrand = () => {
    const {mutate,isPending} = useAddBrand()
    const [image, setImage] = useState<File>()
    const [imageError , setImageError ] = useState("")
    const form = useForm<z.infer<typeof brandSchema>>({
        resolver: zodResolver(brandSchema),
        defaultValues: {
         title:"",description:""
        }})
function onSubmit(data : z.infer<typeof brandSchema>){
    console.log(data)
if(!image){
 return setImageError("please provide an image")
}
mutate({...data,image})
}
  return (
    <Form {...form}>
        <form className="w-100" onSubmit={form.handleSubmit(onSubmit)} >
          <FormDescription className="text-center text-base " >Create a new brand</FormDescription>
          <FormField disabled={isPending}
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Brand name</FormLabel>
            <FormControl>
              <Input placeholder="name" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
          
        )}
      />
        <FormField disabled={isPending}
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="description" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>

        )}
      />
     <div>
      <Label htmlFor="image" >Image</Label>
      <Input  id="image" type="file" disabled={isPending}
       onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
        setImageError("")
        if(event.target.files)
        setImage(event.target.files[0])
       }} />
       <FormMessage  >{imageError}</FormMessage>
     </div>
<Button disabled={isPending} className="mt-2"  > Submit </Button>
</form>
</Form>
  )
}

export default AddBrand