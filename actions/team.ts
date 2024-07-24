'use server'

import { db } from '@/lib/db'
import { z } from 'zod'
import { schemaTeam } from '@/app/dashboard/team/schemaTeam'

export const addNewTeam = async (values: z.infer<typeof schemaTeam>) => {
  const validatedField = schemaTeam.safeParse(values)
  console.log(validatedField)
  if (!validatedField.success) {
    return { error: 'Invalid field' }
  }

  try {
    await db.team.create({
      data: {
        name: validatedField.data.name,
      },
    })
    return {
      success: 'Created successfully',
    }
  } catch (err) {
    return { error: 'Something went wrong!' }
  }
}
