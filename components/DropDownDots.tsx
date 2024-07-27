'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import dotsIcon from '@/public/three_dots_icon.svg'
import { useOutsideClick } from '@/hook/useOutsideClick'
import { formatTextToSlug } from '@/lib/helper'
import { DropDownType } from '@/types'

const DropDownDots = ({ data }: DropDownType) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useOutsideClick(buttonRef, () => setIsOpen(false))
  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        className="flex items-center hover:scale-110 duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={dotsIcon} alt="dots icon" width={18} height={18} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg z-1 py-2 rounded-md z-10"
          >
            <div className="absolute -top-[8px] left-1/2 -translate-x-1/2">
              <div
                className="w-0 h-0 
                            border-l-[8px] border-r-[8px] border-b-[8px] 
                            border-l-transparent border-r-transparent border-b-white"
              ></div>
            </div>

            <div className="text-darkBlue flex flex-col rounded-md">
              {data.map((item) => {
                return item.href ? (
                  <Link
                    key={item.id}
                    href={formatTextToSlug(item.href)}
                    className="p-2 outline-none hover:bg-darkBlue  hover:text-gray-50 overflow-hidden"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button key={item.id} className="p-2 outline-none hover:bg-darkBlue  hover:text-gray-50">
                    {item.name}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropDownDots
