import * as z from "zod"
import Center from "../components/Center"
import { Link } from "react-router-dom"
import {useLogin} from "../features/authentcation/authServices"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormLabel, FormMessage, FormItem, FormField, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import logo from '../../public/logo.jpg'
const formSchema = z.object({
  email: z.string().email(),
  password : z.string().min(1, "please provide a password")
 
})

const Login = () => {
   
    const {mutate, isPending} = useLogin()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
       email:"",password:""
      },
    })

    function onSubmit(data : z.infer<typeof formSchema>){
    mutate(data)
    console.log(data)
    }
  return (
    <Form {...form}>
    <Center>
<img height={50} width={170} src={logo} alt="logo" />
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 bg-stone-50 border-1  shadow-md border-slate-900 w-[375px] p-8 rounded-sm ">
      <p className=" text-base font-medium text-slate-800" >Welcome! enter your credentials to continue</p>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input disabled={isPending} placeholder="email" {...field} />
            </FormControl>
            <FormMessage/>
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
              <Input placeholder="password" disabled={isPending} {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
          
        )}
      />
      <FormDescription> you dont have an account ? register <Link className=" font-bold " to="/register">here</Link> </FormDescription>
        <Button  disabled={isPending} >Login</Button>
      </form>
      </Center>
      </Form>
  )
}

export default Login