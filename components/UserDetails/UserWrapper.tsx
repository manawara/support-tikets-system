import React, { ReactNode } from 'react'
import Card from '../Card'
import { UserWrapperProps } from '@/types'

const UserWrapper = ({ title, description, children }: UserWrapperProps) => {
  return (
    <Card>
      <div className="p-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-gray-300 text-sm">{description}</span>
        <div className="mt-3">{children}</div>
      </div>
    </Card>
  )
}

export default UserWrapper
