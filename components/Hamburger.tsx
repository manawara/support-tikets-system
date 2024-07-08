'use client'
import { useContextHamburger } from '@/context/ContextHamburger'
import { motion, MotionConfig } from 'framer-motion'
const Hamburger = ({ className }: { className: string }) => {
  const ctx = useContextHamburger()
  const variants = {
    top: {
      open: { rotate: ['0deg', '0deg', '45deg'], top: ['35%', '50%', '50%'] },
      closed: { rotate: ['45deg', '0deg', '0deg'], top: ['50%', '50%', '35%'] },
    },
    middle: {
      open: { rotate: ['0deg', '0deg', '-45deg'] },
      closed: { rotate: ['-45deg', '0deg', '0deg'] },
    },
    bottom: {
      open: { rotate: ['0deg', '0deg', '45deg'], bottom: ['35%', '50%', '50%'], left: '50%' },
      closed: { rotate: ['45deg', '0deg', '0deg'], bottom: ['50%', '50%', '35%'], left: 'calc(50% + 6px)' },
    },
  }

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <motion.button
        initial={false}
        className={`h-14 w-14 rounded-full bg-white/0  hover:bg-gray-600/20 relative flex flex-col justify-center items-center z-20 ${className}`}
        animate={ctx.open ? 'open' : 'closed'}
        onClick={ctx.handleOpen}
      >
        <motion.span
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
          variants={variants.top}
          className=" bg-gray-50 h-[2px] w-7 absolute"
        ></motion.span>
        <motion.span
          style={{ y: '-50%', left: '50%', x: '-50%', top: '50%' }}
          variants={variants.middle}
          className=" bg-gray-50 h-[2px] w-7  absolute"
        ></motion.span>
        <motion.span
          style={{ y: '50%', left: 'calc(50% + 6px)', x: '-50%', bottom: '35%' }}
          variants={variants.bottom}
          className=" bg-gray-50 h-[2px] w-4  absolute"
        ></motion.span>
      </motion.button>
    </MotionConfig>
  )
}

export default Hamburger
