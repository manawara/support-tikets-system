'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import cancelIcon from '@/public/cancel_icon.svg'
import Image from 'next/image'
import { useState } from 'react'

type NavTicketItemProps = {
  name: string
  count?: number
  id: number
  isClose?: boolean
  onClick?: (id: number) => void
}

const listItemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.1,
    },
  },
}

const cancelIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
}

const NavListItem = ({ name, count, id, isClose, onClick }: NavTicketItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.li
      key={id}
      variants={listItemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex items-center justify-between w-full sm:w-auto sm:bg-white rounded-lg p-2 cursor-pointer relative top-0 left-0"
    >
      {isClose && (
        <motion.div
          variants={cancelIconVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
          className="absolute -top-2 -right-2 bg-midnightBlue rounded-full p-1 flex"
          onClick={() => onClick && onClick(id)}
        >
          <Image src={cancelIcon} width={8} alt="cancel icon" />
        </motion.div>
      )}
      <Link href="/" className="flex justify-between items-center w-full">
        <span className="mr-2 sm:text-darkBlue">{name}</span>
        <span className="bg-babyBlue rounded-md px-3 py-1 text-darkBlue text-xs ">{count}</span>
      </Link>
    </motion.li>
  )
}

export default NavListItem
