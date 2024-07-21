import React, { ReactNode } from 'react'
import Card from './Card'
import Image from 'next/image'
import profileIcon from '@/public/profile.jpeg'

const Message = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Card>
        <div className="flex justify-between w-full items-center">
          <div className=" flex gap-4 items-center">
            <div className="relative top-0 left-0 size-8 rounded-full bg-slate-300 overflow-hidden flex">
              <Image src={profileIcon} alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-gray-300">Bill Mates</p>
              <div>bill@mates.com</div>
            </div>
          </div>
          <div>10 minutes ago</div>
        </div>
        <p className="my-4 max-w-full break-words overflow-anywhere">{children}</p>
      </Card>
    </>
  )
}

export default Message
