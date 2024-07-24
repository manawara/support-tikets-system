import { z } from 'zod'
export const schemaTeam = z.object({
  name: z.string().min(1, 'Name team is required!'),
})
