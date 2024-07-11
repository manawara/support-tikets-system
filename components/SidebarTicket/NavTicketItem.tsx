'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

type NavTicketItemProps = {
  name: string
  count: number
  index: number
}
const NavTicketItem = ({ name, count, index }: NavTicketItemProps) => {
  return (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      className="flex items-center justify-between w-full sm:w-auto sm:bg-white rounded-lg p-2"
    >
      <Link href="/">
        <span className="mr-2 sm:text-darkBlue">{name}</span>
        <span className="bg-babyBlue rounded-md px-3 py-1 text-darkBlue text-xs">{count}</span>
      </Link>
    </motion.li>
  )
}

export default NavTicketItem
