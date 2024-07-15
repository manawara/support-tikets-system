import React from 'react'
import Card from './Card'
import Image from 'next/image'
import profileIcon from '@/public/profile.jpeg'

const Message = ({ children }) => {
  return (
    <Card>
      <div className="flex gap-4 items-center">
        <div className="relative top-0 left-0 size-8 rounded-full bg-slate-300 overflow-hidden flex">
          <Image src={profileIcon} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-300">Bill Mates</p>
          <div>bill@mates.com</div>
        </div>
      </div>
      {children}
    </Card>
  )
}

export default Message
