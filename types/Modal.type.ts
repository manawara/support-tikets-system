import { ReactNode } from 'react'
export type ModalType = {
  children: ReactNode
  className?: string
}
export type ModalRef = {
  open: () => void
  close: () => void
}
