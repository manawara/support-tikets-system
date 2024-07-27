import React from 'react'
import { TableHeaderProps } from '@/types'

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <thead className="bg-darkBlue text-left">
      <tr>
        {columns.map((column) => (
          <th key={column.key.toString()} className="p-4 font-normal divide-y divide-gray-200">
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
