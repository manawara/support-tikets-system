import React from 'react'
import NavTicketList from '@/components/SidebarTicket/NavTicketList'
import Input from '@/components/Input'
import Table from '@/components/Table/Table'
import NewTeam from '@/components/Team/NewTeam'
const TeamPage = () => {
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
      <NavTicketList
        title="Teams"
        items={[
          { name: 'All tickets', count: 21 },
          { name: 'New', count: 1 },
          { name: 'Open Tickets', count: 1 },
          { name: 'On hold', count: 1 },
          { name: 'Urgent', count: 1 },
          { name: 'Closed Tickets', count: 1 },
        ]}
      />
      <Table data={data} columns={columns} namePage="team" />
    </div>
  )
}

export default TeamPage
