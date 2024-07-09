import Image from 'next/image'
import profileIcon from '@/public/profile.jpeg'
const UserProfile = () => {
  return (
    <div className="relative top-0 size-8 rounded-full bg-slate-300 overflow-hidden">
      <Image src={profileIcon} alt="" fill className="object-cover" />
    </div>
  )
}

export default UserProfile
