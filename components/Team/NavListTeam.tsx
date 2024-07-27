'use client'
import NavList from '@/components/NavList/NavList'
import { deleteTeam } from '@/actions/team'
import { ItemsTeam } from '@/types'

const NavListTeam = ({ teams }: { teams: ItemsTeam[] }) => {
  const handleDeleteItem = async (id: number) => {
    await deleteTeam(id)
  }

  const itemsWithCount = teams.map((team: ItemsTeam) => ({
    id: team.id,
    name: team.name,
    count: team._count.users,
  }))

  return <NavList title="Teams" items={itemsWithCount} isClose onClick={handleDeleteItem} />
}

export default NavListTeam
