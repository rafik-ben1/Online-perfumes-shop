import React ,{ useState } from "react"
import Center from "../components/Center"
import InputField from "../components/InputField"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import useLogin from "../features/authentcation/useLogin"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {data,error,mutate} = useLogin()

    function handelSubmit(e){
        e.preventDefault()
        mutate({email,password})
    }
  return (
    <Center className="bg-stone-50"  >
<h2 className=" text-indigo-600 font-semibold text-xl mb-4 text-center" >Login to your account</h2>
    
    <form onSubmit={handelSubmit}  >
     <div className="w-[375px] flex flex-col text-start gap-3 p-8  bg-slate-100 rounded-md " >
      <InputField  label='email'  >
      <input className="p-2 bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-500" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email"   type="text"  />
        </InputField>
        <InputField label='password' >
       <input className="p-2 bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-500" value={password}  onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" />
       </InputField>
           <Button variation="primary" className='rounded-sm mt-2 '  >Sign in</Button>
           {error && <p className="p-[0.35rem] text-sm bg-red-200 text-red-600 font-medium rounded-sm " >{error.message}</p> }

       <div className="flex items-center gap-2 text-sm sm:text-base  " > 
       <p className=" text-stone-500">you don&apos;t have an account?</p><Link className=" text-indigo-900" to="/register">sign up</Link> 
       </div>
     </div>
    </form>
</Center >
  )
}

export default Login