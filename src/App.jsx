import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home, About, Projects, Error } from './pages'
import { Navbar } from './components'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <Error /> },
]

export function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  )
}