import NavList from './NavList'
const SidebarTicket = () => {
  return (
    <aside className="py-6 bg-lightBlue px-4 relative">
      <nav>
        <NavList
          title="Support Tickets"
          items={[
            { name: 'All tickets', count: 21, id: 1 },
            { name: 'New', count: 1, id: 2 },
            { name: 'Open Tickets', count: 1, id: 3 },
            { name: 'On hold', count: 1, id: 4 },
            { name: 'Urgent', count: 1, id: 5 },
            { name: 'Closed Tickets', count: 1, id: 6 },
          ]}
        />
      </nav>
    </aside>
  )
}

export default SidebarTicket
