import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useAddProduct } from "./productServices"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useBrands } from "../brands/brandservices"
import Spinner from "@/components/Spinner"

const productSchema = z.object({
    title: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    description : z.string().min(30,{
      message: "description must be at least 30 character long!",
    }),
    gender: z.enum(["male","female", "uni"]),
    price: z.string(),
      stock: z.string(),
      brand : z.string().min(1,{message:"please select a brand"})
    
})


const AddProduct = () => {
    const [image, setImage] = useState<File>()
    const [imageError , setImageError ] = useState("")
    const {data} = useBrands()
    const {mutate,isPending} = useAddProduct()

    console.log(data)
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
         title:"",description:"",gender:"male"
        }})
        function onSubmit(data : z.infer<typeof productSchema> ){
            if(!image){
                return setImageError("please provide an image")
               }
               mutate({...data,stock:Number(data.stock),price:Number(data.price),image})
        }
  return (
    <Form {...form}>
    <form className="w-100" onSubmit={form.handleSubmit(onSubmit)} >
      <FormDescription className="text-center text-base " >Create a new product</FormDescription>
      <FormField disabled={isPending}
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Product name</FormLabel>
        <FormControl>
          <Input  placeholder="name" {...field} />
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
   <FormField disabled={isPending}
    control={form.control}
    name="price"
    render={({ field }) => (
      <FormItem>
        <FormLabel>price</FormLabel>
        <FormControl>
          <Input placeholder="price" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>

    )}
  />
  <FormField disabled={isPending}
    control={form.control}
    name="stock"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Stock</FormLabel>
        <FormControl>
          <Input placeholder="stock" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>

    )}
  />
  <FormField disabled={isPending}
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
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
              <FormField disabled={isPending}
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Brand</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? data?.find(
                            (brand) => brand.title === field.value
                          )?.title
                        : "Select language"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    {!data && <Spinner /> }
                  <Command>
                    <CommandInput
                      placeholder="Search brand"
                      className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {data?.map((brand) => (
                        <CommandItem
                          value={brand._id}
                          key={brand._id}
                          onSelect={() => {
                            form.setValue("brand", brand._id ?? "")
                            
                          }}
                        >
                          {brand.title}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              brand._id === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              
              <FormMessage />
            </FormItem>
          )}
        />
     <div>
      <Label htmlFor="image" >Image</Label>
      <Input disabled={isPending}  id="image" type="file"
       onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
        setImageError("")
        if(event.target.files)
        setImage(event.target.files[0])
       }} />
       <FormMessage  >{imageError}</FormMessage>
     </div>
<Button className="mt-2"  > Submit </Button>
  </form>
  </Form>
  )
}

export default AddProduct