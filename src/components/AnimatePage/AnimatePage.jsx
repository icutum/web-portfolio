import { motion } from 'framer-motion'

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function AnimatedPage({children}) {
  return (
    <motion.div variants={animations} initial='initial' animate='animate' exit='exit'>
      {children}
    </motion.div>
  )
}
