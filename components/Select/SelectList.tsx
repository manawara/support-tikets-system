import { motion } from 'framer-motion'
import SelectItem from './SelectItem'
import { SelectListProps } from './types'

const SelectList = ({ data, onSelect }: SelectListProps) => {
  return (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute w-full mt-2 bg-[#1e3658] rounded-md overflow-hidden z-10"
      style={{ originY: 0 }}
    >
      {data.map((item, index) => (
        <SelectItem key={item.id} {...item} index={index} onSelect={onSelect} />
      ))}
    </motion.ul>
  )
}

export default SelectList
