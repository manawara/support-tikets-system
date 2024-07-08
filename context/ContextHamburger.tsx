'use client'
import { type ReactNode, createContext, useState, useContext } from 'react'

type ContextType = {
  open: boolean
  handleOpen: () => void
}

const ContextHamburger = createContext<ContextType>({ open: false, handleOpen: () => {} })

export const useContextHamburger = () => {
  const ctx = useContext(ContextHamburger)
  if (!ctx) {
    throw new Error('useContextHamburger has to be used within <ContextHamburger.Provider>')
  }
  return ctx
}

const HamburgerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }
  const ctx = {
    open,
    handleOpen,
  }
  return <ContextHamburger.Provider value={ctx}>{children}</ContextHamburger.Provider>
}

export default HamburgerProvider
