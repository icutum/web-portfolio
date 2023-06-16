import { Hero, AnimatePage } from '../../components'
import './About.scss'

export default function About() {
  return (
    <AnimatePage>
      <Hero />
      <main className='main'>
        <div className='container'>
          <h1>Sobre mí</h1>
        </div>
      </main>
    </AnimatePage>
  )
}
