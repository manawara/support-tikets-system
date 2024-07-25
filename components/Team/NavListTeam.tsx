'use client'
import { revalidatePath } from 'next/cache'
import NavList from '../SidebarTicket/NavList'
import { deleteTeam } from '@/actions/team'
type NavListTeamType = {
  id: number
  name: string
}

type TeamType = {
  teams: NavListTeamType[]
}

const NavListTeam = ({ teams }: TeamType) => {
  const handleDeleteItem = async (id: number) => {
    await deleteTeam(id)
  }

  return <NavList title="Teams" items={teams} isClose onClick={handleDeleteItem} />
}

export default NavListTeam
