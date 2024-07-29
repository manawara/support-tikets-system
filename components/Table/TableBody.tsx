import { motion } from 'framer-motion'
import { TableType } from '@/types'
import DropDownDots from '../DropDownDots'
import Spinner from '../Spinner'

const TableBody: React.FC<TableType> = ({ data, columns, namePage, loading, onDelete }) => {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length} className="text-center p-4">
            <Spinner />
          </td>
        </tr>
      </tbody>
    )
  }

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.tbody
      className="bg-lightBlue divide-y divide-gray-400 whitespace-nowrap"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((item, itemIndex) => (
        <motion.tr key={itemIndex} variants={rowVariants}>
          {columns.map((column) => (
            <td key={column.key.toString()} className="text-left p-4 font-thin text-sm ">
              {column.key === 'action' ? (
                <DropDownDots
                  data={[
                    { id: 1, name: 'Show details', href: namePage + '/' + item.uid },
                    { id: 2, name: 'Delete', onDelete: () => onDelete?.(item.id) },
                  ]}
                />
              ) : (
                item[column.key]
              )}
            </td>
          ))}
        </motion.tr>
      ))}
    </motion.tbody>
  )
}

export default TableBody
