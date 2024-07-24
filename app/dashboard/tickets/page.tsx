import FilterTicket from '@/components/FilterTicket/FilterTicket'
import SidebarTicket from '@/components/SidebarTicket/SidebarTicket'
import Table from '@/components/Table/Table'

const TicketPage = () => {
  const data = [
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

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'fullName', header: 'Client' },
    { key: 'topic', header: 'Topic' },
    { key: 'agent', header: 'Agent' },
    { key: 'status', header: 'Status' },
    { key: 'action', header: '' },
  ]
  return (
    <div>
      <FilterTicket />
      <SidebarTicket />
      <div className="px-8 bg-lightBlue">
        <Table data={data} columns={columns} namePage="tickets/" />
      </div>
    </div>
  )
}

export default TicketPage
