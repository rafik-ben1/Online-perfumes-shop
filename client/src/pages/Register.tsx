import { SyntheticEvent, useState } from "react"
import { Button } from "../components/Button"
import Center from "../components/Center"
import { Link } from "react-router-dom"
import useRegister from "../features/authentcation/useRegister"

const Register = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name,setName] = useState("")
    const {mutate} = useRegister()
    function handelSubmit(e : SyntheticEvent){
        e.preventDefault()
        console.log(name,password,email)
        mutate({name,email,password})
    }
  return (
    <Center className="bg-stone-50"  >
    <h2 className=" text-indigo-600 font-semibold text-xl mb-4 text-center" >Login to your account</h2>
        
        <form  onSubmit={handelSubmit} >
         <div className="w-[375px] flex flex-col text-start gap-3 p-8  bg-slate-100 rounded-md " >
         <label className=' text-slate-800 font-semibold text-md capitalize ' > name </label>
         <input className="p-[.40rem] bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-indigo-800" value={name} onChange={(e)=> setName(e.target.value)} name="email" id="email"   type="text"  />
         <label className=' text-slate-800 font-semibold text-md capitalize ' > email </label>
         <input className="p-[.40rem] bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-indigo-800" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email"   type="text"  />
         <label className=' text-slate-800 font-semibold text-md capitalize ' > password </label>
         <input className="p-[.40rem] bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-indigo-800" value={password}  onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" />
         <Button variation="primary" className='rounded-sm mt-2 '  >Sign up!</Button>
    
           <div className="flex items-center gap-2 text-sm sm:text-base  " > 
           <p className=" text-stone-500">you don&apos;t have an account?</p><Link className=" text-indigo-900" to="/register">sign up</Link> 
           </div>
         </div>
        </form>
    </Center >
  )
}

export default Register