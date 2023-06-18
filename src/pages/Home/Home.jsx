import { motion } from 'framer-motion'
import { Hero, AnimatePage } from '../../components'
import './Home.scss'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export default function Home() {
  return (
    <AnimatePage>
      <Hero />
      <main className="main">
        <div className="container">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={{delay: .5}}
          >
            Animación
          </motion.p>
          <p style={{height: '200vh'}}>200vh</p>
        </div>
      </main>
    </AnimatePage>
  )
}
