import { ReactNode } from "react"
interface Variations {
    primary: string;
    secondary: string;
    dark: string;
  }
  interface Sizes {
    sm: string;
    md: string;
    lg: string;
  }

const variations : Variations = {
    primary : "bg-indigo-500 text-stone-100 hover:bg-indigo-700 ",
    secondary :"bg-stone-200  text-stone-900 hover:bg-stone-400 ",
    dark : 'bg-gray-700 text-slate-50 hover:bg-slate-800 '
}
const sizes : Sizes = {
    sm : 'py-1 px-2 ',
    md : 'py-2 px-3',
    lg : 'py-3 px-4'
}

type props = {
    children: string | ReactNode,
    variation? : keyof Variations ,
    size?: keyof Sizes,
    className?:string,
    onClick? : ()=> void
}
export  const Button = ({children , variation='primary' , size ='md' , className ,onClick }:props) => {
    const styles = `${variations[variation]} ${sizes[size]} transition-all duration-300 `
  return (
    <button onClick={onClick}  className={`${styles} ${className} `} >
    {children}
    </button>
  )
}