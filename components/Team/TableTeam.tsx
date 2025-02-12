'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Table from '../Table/Table'
import { getAllUsers } from '@/data/team'
import { deleteUser } from '@/actions/user'

const TableTeam = () => {
  const [page, setPage] = useState(1)

  const { status, data, error, refetch } = useQuery({
    queryKey: ['users', page],
    queryFn: () => getAllUsers({ query: '', page, pageSize: 10 }),
  })

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  const handleDeleteUser = async (id: string) => {
    await deleteUser(id)
    refetch()
  }

  const columns = [
    { key: 'uid', header: 'ID' },
    { key: 'name', header: 'Full name' },
    { key: 'team', header: 'Team' },
    { key: 'role', header: 'Role' },
    { key: 'action', header: '' },
  ]

  return (
    <Table
      data={data?.users || []}
      columns={columns}
      namePage="team"
      paginationOptions={{
        ...data?.pagination,
        onNext: handleNextPage,
        onPrev: handlePrevPage,
      }}
      loading={status === 'pending'}
      onDelete={handleDeleteUser}
    />
  )
}

export default TableTeam
