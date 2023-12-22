import { HTMLProps, ReactNode } from "react"

type props = {
    children : ReactNode | React.ReactElement<HTMLProps<HTMLInputElement>>,
    error? : string,
    label : string
}

const InputField = ({children, error, label}:props) => {
    return (
      <>
  <label className=' text-slate-800 font-semibold text-md capitalize ' > {label} </label>
  {children}
   { error && <p className=' text-red-600 text-sm font-semibold p-0 m-0  ' > {error}   </p>}
      </>
    )
  }
  
  export default InputField