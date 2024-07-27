import { InputHTMLAttributes } from 'react'
import { MotionProps } from 'framer-motion'
export type InputProps = {
  label?: string
  isExpanded?: boolean
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement> &
  MotionProps
