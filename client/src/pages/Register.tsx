import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useRegister from "@/features/authentcation/useRegister"
import Center from "@/components/Center"
import { Link } from "react-router-dom"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message : "please enter a valid email"
  }),
  password : z.string().min(8,{
    message: "password must be at least 8 character long!",
  }),
  confirm: z.string()
}).refine(data => data.password===data.confirm,{message:"passwords don't match!", path:["confirm"]})

export default function Register() {
  const {mutate, isPending } = useRegister()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",email:"",password:"",confirm:""
    },
  })

function onSubmit(data : z.infer<typeof formSchema>){
  const {email, name , password} = data
mutate({email,name,password})
console.log(data)
}
  return (
    <Form {...form}>
      <Center>
        <h2 className=" font-semibold text-xl text-slate-800 p-2" >Create a new account</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 bg-stone-50 border-1  shadow-md border-slate-900 w-[375px] p-8 rounded-sm ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="password" placeholder="password" {...field} />
              </FormControl>         
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="confirm password" {...field} />
              </FormControl>             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>already have an account ? log in <Link className=" font-bold " to="/login">here</Link> </FormDescription>
        <Button disabled={isPending} >Register</Button>
      </form>
    </Center >
    </Form>
  )
}
