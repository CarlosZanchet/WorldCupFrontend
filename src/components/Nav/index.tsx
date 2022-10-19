import { NavLink } from "./NavLink";
import { HiAnnotation } from 'react-icons/hi'
import { FaUsers, FaFutbol } from 'react-icons/fa'

export function Nav() {
  return (
    <nav className="h-14 w-fill bg-gray-50 mt-4 flex gap-7 justify-center items-center rounded-lg">
      <NavLink icon={<HiAnnotation />} path="/login">Login</NavLink>
      <NavLink icon={<HiAnnotation />} path="/dashboard">Dashboard</NavLink>
      <NavLink icon={<FaUsers />} path="/clan">Class</NavLink>
      <NavLink icon={<FaFutbol />} path="/jogos">Jogos</NavLink>    
    </nav>
  )
}