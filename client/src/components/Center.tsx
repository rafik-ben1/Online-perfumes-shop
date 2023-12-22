import { ReactNode } from "react"

const BaseClass = "w-full h-full fixed top-0 left-0 flex justify-center flex-col items-center  "

type props = {
    children : ReactNode,
    className : string
}

const Center = ({children , className}:props) => {
  return (
    <div className={BaseClass + className } >
{children}
    </div>
  )
}


export default Center