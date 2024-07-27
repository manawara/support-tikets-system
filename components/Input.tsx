'use client'
import { forwardRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { InputProps } from '@/types'

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, isExpanded, placeholder, ...props }, ref) => {
  return (
    <motion.div
      className={`relative my-3 ${placeholder ? 'mb-2' : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {label && (
          <motion.label
            className={`text-sm  text-gray-50 transition-all duration-300 ease-in-out pointer-events-none
            `}
            animate={{
              scale: props.value ? 0.8 : 1,
              color: props.value ? '#d1d5db' : '#ffffff',
            }}
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>
      <motion.input
        {...props}
        ref={ref}
        className={`${
          !isExpanded ? 'w-3/4' : 'w-full'
        } px-3 py-2 font-poppins text-sm text-white placeholder:text-gray-300 bg-[#1e3658] rounded-md focus:outline-none border-[1px] border-solid border-[#5d8fc9] focus:ring-1 focus:ring-[#7da7d9] transition-all duration-300 ease-in-out`}
        whileFocus={!isExpanded ? { width: '100%' } : undefined}
        placeholder={placeholder ? placeholder : ''}
      />
    </motion.div>
  )
})

Input.displayName = 'Input'

export default Input
