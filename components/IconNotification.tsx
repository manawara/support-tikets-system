'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { NotificationType } from '@/types'
const IconNotification = ({ icon, alt, width, color, count, ...otherProps }: NotificationType) => {
  return (
    <motion.button
      className="relative top-0 left-0"
      {...otherProps}
      whileHover={{
        scale: 1.12,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Image src={icon} width={width} alt={alt} />
      <AnimatePresence>
        {count > 0 && (
          <>
            <motion.span
              className={`absolute top-0 -right-2 size-4 rounded-full ${color} text-gray-50 text-xs flex justify-center items-center`}
            >
              {count}
            </motion.span>
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
                times: [0, 0.5, 1],
              }}
              className={`absolute top-0 -right-2 size-4 rounded-full ${color} pointer-events-none`}
            />
          </>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default IconNotification
