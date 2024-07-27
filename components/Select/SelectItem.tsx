import { motion } from 'framer-motion'
import { SelectItemProps } from '@/types'

const SelectItem = ({ id, name, index, onSelect }: SelectItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="px-4 py-2 hover:bg-[#2a4a75] cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <motion.div whileTap={{ scale: 0.95 }} className="capitalize text-sm">
        {name}
      </motion.div>
    </motion.li>
  )
}

export default SelectItem
