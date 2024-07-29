import Card from '../Card'
import Input from '../Input'
import Select from '../Select/Select'
import InputFile from '../InputFile'

const UserDetails = () => {
  return (
    <Card>
      <div className="p-2">
        <h3 className="text-2xl font-semibold">User details</h3>
        <span>Update the user&apos;s information</span>
        <Input label="Name" name="name" isExpanded />
        <Input label="Email" name="email" isExpanded />
        <Select
          name="role"
          value=""
          placeholder="Choose role"
          label="Role"
          data={[
            { id: 1, name: 'User' },
            { id: 2, name: 'Admin' },
          ]}
        />
        <Select
          name="status"
          value=""
          placeholder="Choose status"
          label="Status"
          data={[
            { id: 1, name: 'Active' },
            { id: 2, name: 'Inactive' },
          ]}
        />
        <Select
          name="team"
          value=""
          placeholder="choose team"
          label="Team"
          data={[
            { id: 1, name: 'Support' },
            { id: 2, name: 'Inactive' },
          ]}
        />
        <InputFile placeholder="Profile image" type="file" name="file" />
      </div>
    </Card>
  )
}

export default UserDetails
