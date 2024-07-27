import { HTMLMotionProps } from 'framer-motion'

export type NotificationType = {
  icon: string
  alt: string
  width: number
  color: string
  count: number
} & Omit<HTMLMotionProps<'button'>, 'icon' | 'alt' | 'width' | 'color' | 'count'>
