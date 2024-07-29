import React, { ReactNode } from 'react'
import Card from '../Card'

const UserWrapper = ({ title, description, children }: UserWrapperProps) => {
  return (
    <Card>
      <div className="p-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span>{description}</span>
        {children}
      </div>
    </Card>
  )
}

export default UserWrapper
