import { Link, useLocation } from "react-router-dom"

interface MainPageNavProps{
    to :string,
    label :string
}

const MainPageNav = ({to,label}:MainPageNavProps) => {
    const path = useLocation().pathname
  return (
    <li  >
     <Link className={`${to === path ? 'text-emerald-400 border-b-2 border-solid border-emerald-500 ' : ' text-neutral-700' } hover:text-emerald-400 transition-all duration-300 p-2` }  to="/">{label}</Link>
    </li>
  )
}

export default MainPageNav