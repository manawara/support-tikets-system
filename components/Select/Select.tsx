'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import cancelIcon from '@/public/cancel_icon.svg'
import SelectList from './SelectList'
import { SelectProps } from '@/types'
import { useOutsideClick } from '@/hook/useOutsideClick'

const Select: React.FC<SelectProps> = ({ data, placeholder, onClick, icon, select, label, name, value }) => {
  const [open, setOpen] = useState(false)
  const [selectOption, setSelectOption] = useState<null | string>(null)

  useEffect(() => {
    if (select) setSelectOption(select)
  }, [select])

  const selectRef = useRef<HTMLDivElement>(null)
  useOutsideClick(selectRef, () => setOpen(false))

  const handleOpen = () => setOpen((prev) => !prev)

  const handleSelectClick = (item: string) => {
    handleOpen()
    setSelectOption(item)
    if (onClick) onClick(item)
  }

  const handleCancelFilter = () => {
    setSelectOption(null)
    setOpen(false)
  }

  return (
    <motion.div
      className="relative mt-4"
      ref={selectRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input type="text" className="hidden" name={name} value={value !== '' ? value : selectOption || ''} readOnly />
      {label && <div className="text-sm">{label}</div>}
      <motion.div
        tabIndex={0}
        className="flex gap-4 text-sm capitalize bg-[#1e3658] px-4 py-2 rounded-md border-[1px] border-solid border-[#5d8fc9] focus:ring-1 focus:ring-[#7da7d9] transition-all duration-100 ease-in-out cursor-pointer overflow-hidden"
        onClick={handleOpen}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <Image src={icon} alt="Sort icon" width={18} />}
        {selectOption || placeholder || 'Choose option'}
        <AnimatePresence>
          {selectOption && (
            <motion.span
              className="ml-auto flex"
              whileHover={{ scale: 1.25 }}
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              exit={{ opacity: 0 }}
              onClick={handleCancelFilter}
            >
              <Image src={cancelIcon} alt="Cancel icon" width={12} height={12} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{open && <SelectList data={data} onSelect={handleSelectClick} />}</AnimatePresence>
    </motion.div>
  )
}

export default Select
