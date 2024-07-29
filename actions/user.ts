'use server'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const deleteUser = async (id: string) => {
  try {
    await db.user.delete({
      where: {
        id,
      },
    })
    revalidatePath('/team')
  } catch (err) {
    console.log(err)
  }
}
