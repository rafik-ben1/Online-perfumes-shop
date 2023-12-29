import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const productSchema = z.object({
    title: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    description : z.string().min(30,{
      message: "description must be at least 30 character long!",
    }),
    gender: z.enum(["male","female", "uni"]),
    price:z.number().min(10,{message:"price shouldnt be less than 10 bucks !"}),
    stock : z.number(),
    brand :z.string().min(1,{message:"please enter a categorie"})
})


const AddProduct = () => {
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
         title:"",description:"",gender:"male"
        }})
        function onSubmit(data : z.infer<typeof productSchema>){
            console.log(data)
        }
  return (
    <Form {...form}>
    <form className="w-100" onSubmit={form.handleSubmit(onSubmit)} >
      <FormDescription className="text-center text-base " >Create a new product</FormDescription>
      <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Product name</FormLabel>
        <FormControl>
          <Input placeholder="name" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>
      
    )}
  />
    <FormField
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
   <FormField
    control={form.control}
    name="price"
    render={({ field }) => (
      <FormItem>
        <FormLabel>price</FormLabel>
        <FormControl>
          <Input type="number" placeholder="price" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>

    )}
  />
  <FormField
    control={form.control}
    name="stock"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Stock</FormLabel>
        <FormControl>
          <Input type="number" placeholder="stock" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>

    )}
  />
  <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">male</SelectItem>
                  <SelectItem value="female">female</SelectItem>
                  <SelectItem value="uni">uni</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
<Button className="mt-2"  > Submit </Button>
  </form>
  </Form>
  )
}

export default AddProduct