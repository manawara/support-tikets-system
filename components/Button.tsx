'use client'
import React, { HTMLAttributes, ReactNode } from 'react'
import { MotionProps, HTMLMotionProps, motion } from 'framer-motion'
import Link from 'next/link'

type BaseProps = {
  children?: ReactNode
}

// Button specific types
type ButtonProps = BaseProps & HTMLAttributes<HTMLButtonElement> & MotionProps

// Link specific types
type LinkProps = {
  href: string
} & BaseProps &
  HTMLMotionProps<'div'>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <motion.button
      className="bg-darkBlue border border-solid rounded-md p-2 px-4 text-sm w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

const LinkButton = ({ href, children, ...props }: LinkProps) => {
  return (
    <Link href={href} passHref>
      <motion.div
        className="bg-darkBlue border border-solid rounded-md p-2 px-4 text-sm w-full inline-block text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    </Link>
  )
}

export { Button, LinkButton }
