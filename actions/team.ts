'use server'

import { db } from '@/lib/db'
import { z } from 'zod'
import { schemaTeam } from '@/app/dashboard/team/schemaTeam'
import { revalidatePath } from 'next/cache'

export const addNewTeam = async (values: z.infer<typeof schemaTeam>) => {
  const validatedField = schemaTeam.safeParse(values)
  if (!validatedField.success) {
    return { error: 'Invalid field' }
  }

  try {
    await db.team.create({
      data: {
        name: validatedField.data.name,
      },
    })
    revalidatePath('/team')
    return {
      success: 'Created successfully',
    }
  } catch (err) {
    return { error: 'Something went wrong!' }
  }
}

export const deleteTeam = async (id: number) => {
  try {
    await db.team.delete({
      where: {
        id,
      },
    })
    revalidatePath('/dashboard/team')
  } catch (err) {}
}
