'use client'
import React, { InputHTMLAttributes } from 'react'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'

type InputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement> &
  MotionProps

const Input = ({ label, ...props }: InputProps) => {
  return (
    <motion.div
      className="relative mb-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        {...props}
        className="w-3/4 px-3 py-2 font-poppins text-sm text-white placeholder:text-gray-300 bg-[#1e3658] rounded-md focus:outline-none border-[1px] border-solid border-[#5d8fc9] focus:ring-1 focus:ring-[#7da7d9] transition-all duration-300 ease-in-out"
        whileFocus={{ width: '100%' }}
        placeholder=""
      />
      <AnimatePresence>
        {label && (
          <motion.label
            className="absolute left-3 top-[9px] text-sm text-gray-50 transition-all duration-300 ease-in-out pointer-events-none"
            initial={{ y: 0 }}
            animate={{
              y: props.value ? -24 : 0,
              scale: props.value ? 0.8 : 1,
              color: props.value ? '#d1d5db' : '#ffffff',
            }}
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Input
