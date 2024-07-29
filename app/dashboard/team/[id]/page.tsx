import UserDetails from '@/components/UserDetails/UserDetails'
import Card from '@/components/Card'
const EditUser = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 grow">
          <h2 className="text-2xl font-poppins text-center mb-4">Edit User - Marcin Nawara</h2>
          <UserDetails>sdsdd</UserDetails>
          <Card>
            <h3>Permissions</h3>
          </Card>
        </div>

        <div className="max-w-xs w-full">sdsdss</div>
      </div>
    </div>
  )
}

export default EditUser
