import React from 'react'
import IconNotification from './IconNotification'
import Card from './Card'
export type NotificationType = {
  icon: string
  alt: string

  color: string
  count: number
}

const Notification = ({ icon, alt, color, count }: NotificationType) => {
  return (
    <div className="relative flex items-center">
      <IconNotification icon={icon} width={22} alt={alt} color={color} count={count} />
      <div className="absolute top-8 right-0 ">
        <Card />
      </div>
    </div>
  )
}

export default Notification
