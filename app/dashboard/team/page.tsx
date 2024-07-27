import React, { Suspense } from 'react'
import Input from '@/components/Input'
import NewTeam from '@/components/Team/NewTeam'
import { getAllTeams } from '@/data/team'
import NavListTeam from '@/components/Team/NavListTeam'
import TableTeam from '@/components/Team/TableTeam'
import SearchTeam from '@/components/Team/SearchTeam'

const TeamPage = async ({ searchParams }: { searchParams: { page: string } }) => {
  const teams = await getAllTeams()

  return (
    <div className="flex flex-col px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <SearchTeam />
        <div className="max-w-30 mt-6">
          <NewTeam />
        </div>
      </div>
      <Suspense fallback="<div>Loading...</div>">
        <NavListTeam teams={teams} />
      </Suspense>
      <TableTeam />
    </div>
  )
}

export default TeamPage
