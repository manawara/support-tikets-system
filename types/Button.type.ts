import { ReactNode, HTMLAttributes } from 'react'
import { MotionProps, HTMLMotionProps } from 'framer-motion'

export type BaseProps = {
  children?: ReactNode
}

// Button specific types
export type ButtonProps = { disabled?: boolean } & BaseProps & HTMLAttributes<HTMLButtonElement> & MotionProps

// Link specific types
export type LinkProps = {
  href: string
} & BaseProps &
  HTMLMotionProps<'div'>
