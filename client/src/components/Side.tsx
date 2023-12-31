import {createPortal} from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import { Dispatch, ReactElement, ReactNode, cloneElement, createContext, useContext, useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'



type SideContext = {
    show : boolean
    setShow : Dispatch<boolean>
}
const SideContext = createContext({} as SideContext )

export const Side = ({children}:{children:ReactNode}) => {
   const [show,setShow] = useState(false)
  return  (
    <SideContext.Provider value={{show,setShow}} >
       {children}
    </SideContext.Provider>
  )
}

function SideTrigger({children}:{children:ReactElement}){
const {setShow} = useContext(SideContext)
    return(
        cloneElement(children,{onClick:()=>{
            setShow(true)
        console.log("clicked")
        }})
        

    )
}

function SideContent({children}:{children : ReactNode}){
    const {show,setShow} = useContext(SideContext)
    const sideRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
       const  handelClickOutside = function(e :MouseEvent ){
            const el = sideRef?.current
              if(!el || !el.contains(e.target as Node) ){
                 return;
               }
              setShow(false)
         }
         document.addEventListener("click",handelClickOutside,true)
       return () => document.removeEventListener("click",handelClickOutside,true)
    },[setShow])

if(!show) return;

    return createPortal(
    <div ref={sideRef} className={`w-full h-screen backdrop-brightness-75 opacity-0 ${show&& "opacity-100 fixed top-0 " } transition-opacity duration-700   `}>
      <aside className={`  absolute  transition-all duration-700 flex flex-col gap-3  h-screen w-[60%] bg-white `}    >
          <Button className='absolute right-0 text-slate-800' variant="ghost" size='icon' onClick={()=>setShow(false)} > <HiXMark /> </Button>
        {children}
      </aside>
     </div>
   ,document.body )
}

Side.trigger = SideTrigger
Side.content = SideContent


