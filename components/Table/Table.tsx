import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

export type UserType = {
  id: number
  fullName: string
  topic: string
  agent: string
  status: string
}

export const data: UserType[] = [
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 1111,
  },
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 2322,
  },
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 444,
  },
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 55,
  },
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 55,
  },
  {
    fullName: 'Bill Gates',
    topic: 'item return',
    agent: 'Marcin',
    status: 'Open',
    id: 55,
  },
]
export type ColumnType = {
  key: keyof UserType | 'action'
  header: string
}
export const columns: ColumnType[] = [
  { key: 'id', header: 'ID' },
  { key: 'fullName', header: 'Client' },
  { key: 'topic', header: 'Topic' },
  { key: 'agent', header: 'Agent' },
  { key: 'status', header: 'Status' },
  { key: 'action', header: '' },
]

const Table = () => {
  return (
    <div className="overflow-x-auto custom-scrollbar border border-solid rounded-md border-gray-400">
      <div className="min-w-[800px]">
        <table className="min-w-full overflow-x-scroll ">
          <TableHeader columns={columns} />
          <TableBody data={data} columns={columns} />
          <TableFooter />
        </table>
      </div>
    </div>
  )
}

export default Table
