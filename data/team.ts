'use server'
import { db } from '@/lib/db'
export const getAllTeams = async () => {
  const teams = await db.team.findMany()
  return teams
}
