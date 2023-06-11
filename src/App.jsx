import { Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Error } from './pages';
import { Navbar } from './components';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <Error /> },
]

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}