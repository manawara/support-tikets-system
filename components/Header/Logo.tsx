'use client'
import { useContextHamburger } from '@/context/ContextHamburger'
import { motion } from 'framer-motion'
const Logo = () => {
  const ctx = useContextHamburger()
  return <motion.h1 className="z-50 text-gray-50 ml-8">Support tickets</motion.h1>
}

export default Logo
