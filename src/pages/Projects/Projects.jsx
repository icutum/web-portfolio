import { Hero, AnimatePage } from '../../components'
import './Projects.scss'

export default function Projects() {
  return (
    <AnimatePage>
      <Hero />
      <main className='main'>
        <div className='container'>
          <h1>Proyectos</h1>
        </div>
      </main>
    </AnimatePage>
  )
}
