'use client'
import { Suspense } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import Spinner from '../Spinner'
import { TableType } from '@/types'

const Table: React.FC<TableType> = ({ data, columns, namePage, paginationOptions, loading, onDelete }) => {
  return (
    <div className="overflow-x-auto custom-scrollbar border border-solid rounded-md border-gray-400">
      <div className="min-w-[800px]">
        <table className="min-w-full overflow-x-scroll ">
          <TableHeader columns={columns} />
          <Suspense fallback={<Spinner />}>
            <TableBody data={data} columns={columns} namePage={namePage} loading={loading} onDelete={onDelete} />
          </Suspense>
          <TableFooter paginationOptions={paginationOptions} loading={loading} />
        </table>
      </div>
    </div>
  )
}

export default Table
