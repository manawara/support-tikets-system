'use client'
import { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react'
type ModalType = {
  children: ReactNode
  className?: string
}
export type ModalRef = {
  open: () => void
  close: () => void
}
const Modal = forwardRef<ModalRef, ModalType>(({ children, className }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }))
  return (
    <dialog ref={dialogRef} className={className}>
      {children}
    </dialog>
  )
})

Modal.displayName = 'Modal'

export default Modal
