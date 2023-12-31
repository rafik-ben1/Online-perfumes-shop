import { Link, useLocation } from "react-router-dom"

interface MainPageNavProps{
    to :string,
    label :string
}
const MainSideItem = ({to,label}:MainPageNavProps) => {
    const path = useLocation().pathname
  return (
<li className='p-3' >
        <Link className={ `  text-base font-semibold p-1 text-slate-100 ${to===path && " text-teal-400" } ` }  to={to} > {label} </Link>
    </li>
    )
}

export default MainSideItem