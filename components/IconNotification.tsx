'use client'
import Image from 'next/image'
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion'

type NotificationType = {
  icon: string
  alt: string
  width: number
  color: string
  count: number
} & Omit<HTMLMotionProps<'button'>, 'icon' | 'alt' | 'width' | 'color' | 'count'>

const IconNotification = ({ icon, alt, width, color, count, ...otherProps }: NotificationType) => {
  return (
    <motion.button
      className="relative top-0 left-0"
      {...otherProps}
      whileHover={{
        scale: 1.12,
        transition: { duration: 0.2 },
      }}
    >
      <Image src={icon} width={width} alt={alt} />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            animate={{
              scale: [1, 1.12, 1],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              },
            }}
            className={`absolute top-0 -right-2 size-4 rounded-full ${color}  text-gray-50 text-xs flex justify-center items-center`}
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default IconNotification
