'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import sortIcon from '@/public/sort_icon.svg'
import cancelIcon from '@/public/cancel_icon.svg'
import SelectList from './SelectList'
import { SelectProps } from './types'
import { useOutsideClick } from '@/hook/useOutsideClick'

const Select = ({ data, placeholder, onClick }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [selectOption, setSelectOption] = useState<null | string>(null)
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
    handleOpen()
  }

  return (
    <motion.div
      className="relative"
      ref={selectRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        tabIndex={0}
        className="flex gap-4 text-sm capitalize bg-[#1e3658] px-4 py-2 rounded-md border-solid border-[#5d8fc9] focus:ring-1 focus:ring-[#7da7d9] transition-all duration-100 ease-in-out cursor-pointer overflow-hidden"
        onClick={handleOpen}
        whileTap={{ scale: 0.95 }}
      >
        <Image src={sortIcon} alt="Sort icon" width={18} />
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
              <Image src={cancelIcon} alt="cancel icon" width={12} height={12} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{open && <SelectList data={data} onSelect={handleSelectClick} />}</AnimatePresence>
    </motion.div>
  )
}

export default Select
