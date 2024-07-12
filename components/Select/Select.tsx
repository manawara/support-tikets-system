'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import sortIcon from '@/public/sort_icon.svg'
import cancelIcon from '@/public/cancel_icon.svg'

type SelectProps = {
  data: { id: number; name: string }[]
  placeholder?: string
  onClick?: (item: string) => string
}

const Select = ({ data, placeholder, onClick }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [selectOption, setSelectOption] = useState<null | string>(null)

  const selectRef = useRef<HTMLDivElement>(null)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleSelectClick = (item: string) => {
    handleOpen()
    setSelectOption(item)
    if (onClick) {
      onClick(item)
    }
  }

  const handleCancelFilter = () => {
    setSelectOption(null)
    handleOpen()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
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
        {selectOption ? selectOption : placeholder ? placeholder : 'Choose option'}
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

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute w-full mt-2 bg-[#1e3658] rounded-md overflow-hidden z-10"
            style={{ originY: 0 }}
          >
            {data.map((item, index) => (
              <motion.li
                key={item.id || index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 hover:bg-[#2a4a75] cursor-pointer"
                onClick={() => handleSelectClick(item.name)}
              >
                <motion.div whileTap={{ scale: 0.95 }} className="capitalize text-sm">
                  {item.name}
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Select
