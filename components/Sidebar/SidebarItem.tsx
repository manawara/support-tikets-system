import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useContextHamburger } from '@/context/ContextHamburger'
import Link from 'next/link'

type ItemType = {
  text: string
  icon: string
  href: string
}

type SidebarType = {
  isTablet: boolean
  item: ItemType
}
const SidebarItem = ({ item, isTablet }: SidebarType) => {
  const ctx = useContextHamburger()
  return (
    <Link href={item.href}>
      <motion.div
        className="flex items-center h-12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <Image src={item.icon} alt={`${item.text} icon`} width={24} height={24} className="w-6 h-6 object-contain" />
        </div>
        <AnimatePresence>
          {(ctx.open || !isTablet) && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="ml-4 whitespace-nowrap overflow-hidden"
            >
              {item.text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  )
}

export default SidebarItem
