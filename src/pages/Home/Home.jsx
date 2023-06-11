import { Hero } from '../../components';
import './Home.scss'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="main">
        <div className="container">
          <p>Esto es el contenido del home</p>
        </div>
      </main>
    </>
  )
}
