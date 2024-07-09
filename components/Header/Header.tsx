import Image from 'next/image'
import UserProfile from '../UserProfile'
import Logo from './Logo'
import messageIcon from '@/public/message_icon.svg'
import bellIcon from '@/public/bell_icon.svg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-darkBlue border-b-[1px] border-solid h-20 pl-10 pr-2 z-20 flex items-center justify-between">
      <Logo />
      <div className="flex gap-4">
        <button className="relative top-0 left-0">
          <Image src={messageIcon} width={22} alt="Message icon" />
          <span className="absolute top-0 -right-2 size-4 rounded-full bg-orange-400 text-gray-50 text-xs flex justify-center items-center">
            2
          </span>
        </button>
        <button className="relative top-0 left-0">
          <Image src={bellIcon} width={22} alt="Message icon" />
          <span className="absolute top-0 -right-1 size-4 rounded-full bg-red-500 text-gray-50 text-xs flex justify-center items-center">
            2
          </span>
        </button>

        <UserProfile />
      </div>
    </header>
  )
}

export default Header
