import UserProfile from '../UserProfile'
import Logo from './Logo'
import messageIcon from '@/public/message_icon.svg'
import bellIcon from '@/public/bell_icon.svg'
import Notification from '../Notification'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-darkBlue border-b-[1px] border-solid h-20 pl-10 pr-2 z-20 flex items-center justify-between">
      <Logo />
      <div className="flex gap-4 items-center ">
        <Notification icon={messageIcon} alt="Notification icon" color="bg-orange-400" count={2} />
        <Notification icon={bellIcon} alt="Message icon" color="bg-red-500" count={2} />

        <UserProfile />
      </div>
    </header>
  )
}

export default Header
