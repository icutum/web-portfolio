import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion'
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

  const [isOpen, setIsOpen] = useCycle(false, true)

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'Sobre mí' },
    { path: '/projects', name: 'Proyectos' },
  ]

  return (
    <nav className={`nav ${isScrollTop ? 'nav--top' : ''}`}>
      <motion.div
        className='nav__toggle'
        onClick={() => setIsOpen()}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          className='nav__toggle-line'
        ></motion.span>
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className='nav__toggle-line'
        ></motion.span>
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          className='nav__toggle-line'
        ></motion.span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <MotionConfig transition={{
            type: 'spring',
            bounce: 0,
          }}>
            <motion.ul className='nav__list' variants={
                {
                  open: { y: '0%' },
                  closed: { y: '-100%' }
                }
              }
              initial='closed'
              animate='open'
              exit='closed'
            >
              {navLinks.map((navLink, index) => (
                <li key={index} className='nav__list-item'>
                  <NavLink
                    className='nav__link'
                    to={navLink.path}
                    onClick={() => setIsOpen()}
                  >
                    {navLink.name}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  )
}
