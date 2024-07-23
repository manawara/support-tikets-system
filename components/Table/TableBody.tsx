import React from 'react'
import { TableType } from './Table'
import DropDownDots from '../DropDownDots'

const TableBody: React.FC<TableType> = ({ data, columns, namePage }) => {
  return (
    <tbody className="bg-lightBlue divide-y divide-gray-400 whitespace-nowrap">
      {data.map((item, itemIndex) => (
        <tr key={itemIndex}>
          {columns.map((column) => (
            <td key={column.key.toString()} className="text-left p-4 font-thin text-sm ">
              {column.key === 'action' ? (
                <DropDownDots
                  data={[
                    { id: 1, name: 'Show details', href: namePage + '/' + item.topic },
                    { id: 2, name: 'Delete' },
                  ]}
                />
              ) : (
                item[column.key]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
