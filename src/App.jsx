import { Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Error } from './pages';
import { Navbar } from './components';

export function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <hr className='stripes'/>
      </main>
    </>
  )
}