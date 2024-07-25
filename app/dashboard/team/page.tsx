import React, { Suspense } from 'react'
import NavList from '@/components/SidebarTicket/NavList'
import Input from '@/components/Input'
import Table from '@/components/Table/Table'
import NewTeam from '@/components/Team/NewTeam'
import { getAllTeams } from '@/data/team'
import NavListTeam from '@/components/Team/NavListTeam'

const TeamPage = async () => {
  const teams = await getAllTeams()

  const data = [
    {
      fullName: 'Bill Gates',
      team: 'item return',
      role: 'Marcin',
      id: 1111,
    },
  ]

  const columns = [
    { key: 'id', header: 'ID' },

    { key: 'fullName', header: 'Full name' },
    { key: 'team', header: 'Team' },
    { key: 'role', header: 'Role' },
    { key: 'action', header: '' },
  ]

  return (
    <div className="flex flex-col px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="w-full max-w-[320px] sm:max-w-72 flex flex-col">
          <Input label="Search person" />
        </div>
        <div className="max-w-30 mt-6">
          <NewTeam />
        </div>
      </div>
      <Suspense fallback="<div>Loading...</div>">
        <NavListTeam teams={teams} />
      </Suspense>
      <Table data={data} columns={columns} namePage="team" />
    </div>
  )
}

export default TeamPage
