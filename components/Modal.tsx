'use client'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { ModalRef, ModalType } from '@/types/Modal.type'

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
