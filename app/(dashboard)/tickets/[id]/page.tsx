import TicketDetails from '@/components/TicketDetails'
import AssignUser from '@/components/AssignUser'
import Card from '@/components/Card'
import Message from '@/components/Message'

const DetailTicketPage = ({ item }) => {
  return (
    <div className="bg-darkBlue  min-h-[calc(100vh-5rem)]">
      <div className="p-4 border-b border-solid">
        <h2 className="text-lg capitalize">Ticket #8931 item.topic</h2>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex gap-4  px-4 py-6 text-xs bg-lightBlue">
          <Message />
        </div>
        <div className="w-[300px] px-4 py-2 ">
          <TicketDetails title="Ticket details" />
          <AssignUser title="Assigned to" />
        </div>
      </div>
    </div>
  )
}

export default DetailTicketPage
