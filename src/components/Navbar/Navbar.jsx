import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar() {
  const [isScrollTop, setIsScrollTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      setIsScrollTop(scrollTop <= 1)
    }

    // Get initial scroll, in case the page is reloaded
    handleScroll()

    addEventListener('scroll', handleScroll)

    return () => { removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <nav className={`nav ${isScrollTop ? 'nav--top' : ''}`}>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <NavLink className='nav__link' to='/'>Home</NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink className='nav__link' to='/about'>Sobre mí</NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink className='nav__link' to='/projects'>Proyectos</NavLink>
        </li>
        <li className='nav__list-item'>
          <a className='nav__link nav__link--featured' href="https://github.com/icutum" target='blank'>GitHub</a>
        </li>
      </ul>
    </nav>
  )
}
