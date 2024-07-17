import TicketDetails from '@/components/TicketDetails'
import AssignUser from '@/components/AssignUser'
import Card from '@/components/Card'
import Message from '@/components/Message'
import RichText from '@/components/RichText'

const DetailTicketPage = ({ item }) => {
  return (
    <div className="bg-darkBlue min-h-[calc(100vh-5rem)] flex flex-col">
      <div className="p-4 border-b border-solid">
        <h2 className="text-lg capitalize">
          Ticket #{item?.id || '8931'} {item?.topic}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-grow overflow-hidden">
        <div className="flex flex-col gap-4 px-4 py-6 text-xs bg-lightBlue flex-auto">
          <Message>
            asdssdss sdsd sdsds sdsdsds ssssssss ssssss ssssss asdssdss sdsd sdsds sdsdsds ssssssss ssssss ssssss
          </Message>
          <RichText />
        </div>
        <div className="w-full sm:max-w-[300px] px-4 py-2 overflow-y-auto">
          <TicketDetails title="Ticket details" />
          <AssignUser title="Assigned to" />
        </div>
      </div>
    </div>
  )
}
export default DetailTicketPage
