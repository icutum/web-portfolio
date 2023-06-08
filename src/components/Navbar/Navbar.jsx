import { NavLink } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>Sobre mí</NavLink></li>
        <li><NavLink to='/projects'>Proyectos</NavLink></li>
      </ul>
    </nav>
  )
}
