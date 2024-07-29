import { ButtonActive } from '../Button'
import UserWrapper from './UserWrapper'

const Permission = () => {
  return (
    <UserWrapper title="Permissions" description="Manage the user's permissions">
      <div className="flex gap-4 justify-center">
        <div className="flex gap-4">
          <ButtonActive active>User</ButtonActive>
          <ButtonActive>Admin</ButtonActive>
        </div>
      </div>
    </UserWrapper>
  )
}

export default Permission
