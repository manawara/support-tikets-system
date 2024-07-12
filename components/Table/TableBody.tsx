import React from 'react'
import { UserType } from './Table'

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
            <td key={column.key.toString()} className="text-left p-4 font-thin text-sm">
              {column.key === 'action' ? (
                <button className="text-blue-600 hover:text-blue-800">Show</button>
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
