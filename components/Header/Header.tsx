import UserProfile from '../UserProfile'
import Logo from './Logo'
import messageIcon from '@/public/message_icon.svg'
import bellIcon from '@/public/bell_icon.svg'
import IconNotification from '../IconNotification'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-darkBlue border-b-[1px] border-solid h-20 pl-10 pr-2 z-20 flex items-center justify-between">
      <Logo />
      <div className="flex gap-4">
        <IconNotification icon={messageIcon} width={22} alt="Notification icon" color="bg-orange-400" count={2} />
        <IconNotification icon={bellIcon} width={22} alt="Message icon" color="bg-red-500" count={2} />
        <UserProfile />
      </div>
    </header>
  )
}

export default Header
