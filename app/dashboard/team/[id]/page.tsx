import UserDetails from '@/components/UserDetails/UserDetails'
import Permission from '@/components/UserDetails/Permission'
import UserActivity from '@/components/UserDetails/UserActivity'
import DeactivateUser from '@/components/UserDetails/DeactivateUser'
import { Button } from '@/components/Button'
const EditUser = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-poppins mb-4">Edit User - Marcin Nawara</h2>

      <div className="flex flex-col md:flex-row  gap-8">
        <div className="flex flex-col gap-4 grow">
          <form className="flex flex-col gap-8">
            <UserDetails />
            <Permission />
            <div className="flex gap-8 max-w-[320px] mx-auto">
              <Button>Save</Button>
              <Button>Discard</Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col max-w-xs w-full mx-auto gap-8">
          <UserActivity />
          <DeactivateUser userId="xsdsd" />
        </div>
      </div>
    </div>
  )
}

export default EditUser
