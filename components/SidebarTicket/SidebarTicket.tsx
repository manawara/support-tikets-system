import Image from 'next/image'
import NavTicketList from './NavTicketList'
import arrowIcon from '@/public/arrow_up_icon.svg'
const SidebarTicket = () => {
  return (
    <aside className="py-6 bg-lightBlue px-4 relative">
      <nav>
        <NavTicketList
          title="Support Tickets"
          items={[
            { name: 'All tickets', count: 21 },
            { name: 'New', count: 1 },
            { name: 'Open Tickets', count: 1 },
            { name: 'On hold', count: 1 },
            { name: 'Urgent', count: 1 },
            { name: 'Closed Tickets', count: 1 },
          ]}
        />
      </nav>
    </aside>
  )
}

export default SidebarTicket
