import FilterTicket from '@/components/FilterTicket/FilterTicket'
import SidebarTicket from '@/components/SidebarTicket/SidebarTicket'
import Table from '@/components/Table/Table'

const TicketPage = () => {
  return (
    <div>
      <FilterTicket />
      <SidebarTicket />
      <div className="px-8 bg-lightBlue">
        <Table />
      </div>
    </div>
  )
}

export default TicketPage
