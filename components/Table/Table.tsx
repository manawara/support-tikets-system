import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

export type ColumnType = {
  key: keyof Record<string, number>
  header: string
}

export type TableType = {
  columns: ColumnType[]
  data: Record<string, any>[]
  namePage: string
}
const Table: React.FC<TableType> = ({ data, columns, namePage }) => {
  return (
    <div className="overflow-x-auto custom-scrollbar border border-solid rounded-md border-gray-400">
      <div className="min-w-[800px]">
        <table className="min-w-full overflow-x-scroll ">
          <TableHeader columns={columns} />
          <TableBody data={data} columns={columns} namePage={namePage} />
          <TableFooter />
        </table>
      </div>
    </div>
  )
}

export default Table
