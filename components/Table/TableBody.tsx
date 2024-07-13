import React from 'react'
import { UserType } from './Table'
import DropDownDots from '../DropDownDots'

type ColumnType = {
  key: keyof UserType | 'action'
  header: string
}

type TableBodyProps = {
  data: UserType[]
  columns: ColumnType[]
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody className="bg-lightBlue divide-y divide-gray-400 whitespace-nowrap">
      {data.map((item, itemIndex) => (
        <tr key={itemIndex}>
          {columns.map((column) => (
            <td key={column.key.toString()} className="text-left p-4 font-thin text-sm ">
              {column.key === 'action' ? (
                <DropDownDots
                  data={[
                    { id: 1, name: 'Show details', href: 'tickets/' + item.topic },
                    { id: 2, name: 'Delete' },
                  ]}
                />
              ) : (
                item[column.key as keyof UserType]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
