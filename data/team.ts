'use server'
import { db } from '@/lib/db'
export const getAllTeams = async () => {
  const teams = await db.team.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: { users: true },
      },
    },
  })
  return teams
}
export const getAllUsers = async ({ ...args }) => {
  const { page, pageSize, query } = args
  const skip = (page - 1) * pageSize

  const [users, totalCount] = await Promise.all([
    db.user.findMany({
      skip,
      take: pageSize,
      select: {
        id: true,
        uid: true,
        name: true,
        email: true,
        role: true,
        teams: true,
      },
      where: {
        OR: [{ email: { contains: query } }, { name: { contains: query, mode: 'insensitive' } }],
      },
      orderBy: {
        uid: 'asc',
      },
    }),
    db.user.count(),
  ])

  const totalPages = Math.ceil(totalCount / pageSize)
  const startCount = (page - 1) * pageSize + 1
  const endCount = Math.min(page * pageSize, totalCount)

  return {
    users,
    pagination: {
      currentPage: page,
      startCount,
      endCount,
      pageSize,
      totalCount,
      totalPages,
    },
  }
}
