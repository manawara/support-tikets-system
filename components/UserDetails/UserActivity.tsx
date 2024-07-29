import React from 'react'
import UserWrapper from './UserWrapper'
import Input from '../Input'

const UserActivity = () => {
  return (
    <UserWrapper title="User Activity" description="View the user's activity">
      <Input label="Last Login" isExpanded placeholder="text" disabled />
      <Input label="Created At" isExpanded placeholder="text" disabled />
      <Input label="Updated At" isExpanded placeholder="text" disabled />
    </UserWrapper>
  )
}

export default UserActivity
