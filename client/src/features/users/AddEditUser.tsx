import * as z from "zod"
import { User } from "@/utils/types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAddUser, useEditUser } from "./userServices"
import { Button } from "@/components/ui/button"

const userSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      email: z.string().email({
        message : "please enter a valid email"
      }),
      password : z.string().min(8,{
        message: "password must be at least 8 character long!",
      }),
      role : z.enum(["user","admin"])

})

const AddEditUser = ({user} : {user? : User} ) => {
    const {mutate, isPending} = useAddUser()
    const {mutate : edit , isPending : isEditing} = useEditUser()

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
          name:user?.name ,email:user?.email,password:user?.password
        },
      })

      function onSubmit(data : z.infer<typeof userSchema>){
        if(!user){
           return mutate(data)
        }
        else {
           edit({...data,_id:user._id})
        }
      }
  return (
    <Form {...form}>
    <form className="w-100" onSubmit={form.handleSubmit(onSubmit)} >
      <FormDescription className="text-center text-base " >Create a new brand</FormDescription>
      <FormField disabled={isPending || isEditing}
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input placeholder="name" {...field} />
        </FormControl>
        <FormMessage/>
      </FormItem>
      
    )}
  />
   <FormField disabled={isPending || isEditing}
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
          
        )}
      />
      <FormField disabled={isPending || isEditing}
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="password" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
          
        )}
      />
       <FormField disabled={isPending || isEditing  }
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="user">user</SelectItem>
                  <SelectItem value="admin">admin</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" disabled={isEditing || isPending}  >Submit</Button>
  </form>
   </Form>
    )
}

export default AddEditUser